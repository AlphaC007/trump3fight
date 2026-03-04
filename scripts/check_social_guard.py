#!/usr/bin/env python3
"""Guardrail: prevent silent social-section regressions in CIO report.

Rule:
- If latest report says no fresh social signals,
- AND there are actually fresh tweets within the same freshness window (default 72h),
then fail with non-zero exit code.

Important:
- Guard checks tweet `time` field freshness (content freshness), not file mtime.
- This keeps CI logic aligned with generate_report.py social filtering.
"""

from __future__ import annotations

import datetime as dt
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPORT_DIR = ROOT / "reports" / "cio_briefings"
SOCIAL_DIR = ROOT / "data" / "social"


def latest_report() -> Path | None:
    files = sorted(REPORT_DIR.glob("*-CIO-Report.md"))
    return files[-1] if files else None


def report_has_no_fresh_social(report_path: Path) -> bool:
    text = report_path.read_text(encoding="utf-8", errors="ignore")
    return "No fresh social signals" in text


def _parse_tweet_time(v: str) -> dt.datetime | None:
    try:
        return dt.datetime.fromisoformat(v.replace("Z", "+00:00"))
    except Exception:
        return None


def count_fresh_tweets(hours: int = 72) -> int:
    if not SOCIAL_DIR.exists():
        return 0

    cutoff = dt.datetime.now(dt.timezone.utc) - dt.timedelta(hours=hours)
    fresh = 0
    seen_urls: set[str] = set()

    for fp in SOCIAL_DIR.glob("*.json"):
        # skip interpreted metadata files
        if fp.name.endswith("_interpreted.json"):
            continue
        try:
            data = json.loads(fp.read_text(encoding="utf-8"))
            if not isinstance(data, list):
                continue

            for t in data:
                if not isinstance(t, dict):
                    continue
                ts = _parse_tweet_time(str(t.get("time", "")))
                if not ts or ts < cutoff:
                    continue

                url = str(t.get("url", "")).strip()
                if url:
                    if url in seen_urls:
                        continue
                    seen_urls.add(url)
                fresh += 1
        except Exception:
            continue

    return fresh


def main() -> int:
    rp = latest_report()
    if not rp:
        print("[social-guard] WARN: no CIO report found; skip")
        return 0

    no_fresh = report_has_no_fresh_social(rp)
    fresh_tweets_72h = count_fresh_tweets(hours=72)

    print(f"[social-guard] latest={rp.name} no_fresh={no_fresh} fresh_tweets_72h={fresh_tweets_72h}")

    if no_fresh and fresh_tweets_72h > 0:
        print("[social-guard] ERROR: report says no fresh social signals but fresh tweets exist in 72h window")
        return 2

    print("[social-guard] OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
