#!/usr/bin/env python3
"""Ensure docs/cio-reports/latest.md includes the newest CIO report date."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPORT_DIR = ROOT / "reports" / "cio_briefings"
HUB_MD = ROOT / "docs" / "cio-reports" / "latest.md"

DATE_RE = re.compile(r"^(\d{4}-\d{2}-\d{2})-CIO-Report\.md$")


def latest_report_date() -> str | None:
    reports = []
    for p in REPORT_DIR.glob("*-CIO-Report.md"):
        m = DATE_RE.match(p.name)
        if m:
            reports.append(m.group(1))
    return sorted(reports)[-1] if reports else None


def main() -> int:
    latest = latest_report_date()
    if not latest:
        print("[hub-freshness] ERROR: no CIO reports found")
        return 2
    if not HUB_MD.exists():
        print("[hub-freshness] ERROR: docs/cio-reports/latest.md missing")
        return 2

    text = HUB_MD.read_text(encoding="utf-8", errors="ignore")
    if latest not in text:
        print(f"[hub-freshness] ERROR: hub page missing latest report date {latest}")
        return 2

    print(f"[hub-freshness] OK: hub includes latest report date {latest}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
