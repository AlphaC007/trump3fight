#!/usr/bin/env python3
"""Build frontend chart dataset from data/timeseries.jsonl.

Output: docs/assets/data/trends.json
Includes:
- points_raw: original snapshot-level points
- points_daily: day-level averages for smoother dashboard view
"""

from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parents[1]
INPUT_PATH = ROOT / "data" / "timeseries.jsonl"
OUTPUT_PATH = ROOT / "docs" / "assets" / "data" / "trends.json"


def _to_pct(v):
    if v is None:
        return None
    return round(float(v) * 100, 2)


def _parse_iso(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def _avg(values):
    vals = [v for v in values if v is not None]
    if not vals:
        return None
    return round(sum(vals) / len(vals), 4)


def load_points_raw() -> list[dict]:
    if not INPUT_PATH.exists():
        return []

    points = []
    with INPUT_PATH.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                row = json.loads(line)
            except json.JSONDecodeError:
                continue

            ts = row.get("as_of_utc")
            if not ts:
                continue

            probs = row.get("scenario_probabilities") or {}

            points.append(
                {
                    "ts": ts,
                    "price_usd": row.get("price_usd"),
                    "top10_holder_pct": row.get("top10_holder_pct"),
                    "bull_probability_pct": _to_pct(probs.get("Bull")),
                }
            )

    points.sort(key=lambda x: _parse_iso(x["ts"]))
    return points


def build_daily(points_raw: list[dict]) -> list[dict]:
    by_day = defaultdict(list)
    for p in points_raw:
        day = _parse_iso(p["ts"]).date().isoformat()
        by_day[day].append(p)

    points_daily = []
    for day in sorted(by_day.keys()):
        bucket = by_day[day]
        points_daily.append(
            {
                "day": day,
                "price_usd": _avg([x.get("price_usd") for x in bucket]),
                "top10_holder_pct": _avg([x.get("top10_holder_pct") for x in bucket]),
                "bull_probability_pct": _avg([x.get("bull_probability_pct") for x in bucket]),
                "samples": len(bucket),
            }
        )

    return points_daily


def main() -> None:
    points_raw = load_points_raw()

    # Keep latest ~30 days by default if dataset is larger.
    if len(points_raw) > 200:
        points_raw = points_raw[-200:]

    points_daily = build_daily(points_raw)

    payload = {
        "generated_at_utc": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "count_raw": len(points_raw),
        "count_daily": len(points_daily),
        "points_raw": points_raw,
        "points_daily": points_daily,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"wrote {OUTPUT_PATH} (raw={len(points_raw)}, daily={len(points_daily)})")


if __name__ == "__main__":
    main()
