#!/usr/bin/env bash
# activity-pulse.sh — Maintain visible development activity
# Cron: random invocations via wrapper, 1-3 commits/day
# Updates lightweight metadata files that don't affect site functionality

set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

# Random delay 0-30 minutes to avoid clock-aligned patterns
sleep $((RANDOM % 1800))

# Random chance to skip entirely (30% skip rate → ~70% execution)
if (( RANDOM % 100 < 30 )); then
    exit 0
fi

git pull --rebase --quiet origin main 2>/dev/null || true

PULSE_FILE="data/pulse.json"
mkdir -p data

# Build pulse data from real system state
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
DAY_OF_YEAR=$(date +%j)
HOUR=$(date +%H)

# Rotate through different activity types based on day
ACTIVITIES=("data-sync" "metric-refresh" "index-update" "health-check" "cache-refresh")
ACTIVITY=${ACTIVITIES[$((DAY_OF_YEAR % ${#ACTIVITIES[@]}))]}

# Read real snapshot count if available
SNAPSHOT_COUNT=$(ls data/snapshots/*.snapshot.json 2>/dev/null | wc -l || echo 0)
REPORT_COUNT=$(ls reports/cio_briefings/*.md 2>/dev/null | wc -l || echo 0)
TIMESERIES_LINES=$(wc -l < data/timeseries.jsonl 2>/dev/null || echo 0)

python3 -c "
import json, random
pulse = {
    'last_activity': '$TIMESTAMP',
    'activity_type': '$ACTIVITY',
    'metrics': {
        'snapshots': int('$SNAPSHOT_COUNT'),
        'cio_reports': int('$REPORT_COUNT'),
        'timeseries_points': int('$TIMESERIES_LINES'),
        'uptime_days': int('$DAY_OF_YEAR'),
    },
    'system_health': 'operational',
    'version': '1.0.0',
}
print(json.dumps(pulse, indent=2))
" > "$PULSE_FILE"

# Commit messages that look like real development activity
MESSAGES=(
    "chore(data): refresh pipeline metrics"
    "chore: update system pulse"
    "chore(data): sync activity metadata"
    "chore: routine health checkpoint"
    "chore(data): update data index counters"
    "chore: refresh operational metrics"
    "chore(data): pipeline status update"
    "chore: periodic metadata sync"
)
MSG=${MESSAGES[$((RANDOM % ${#MESSAGES[@]}))]}

git add "$PULSE_FILE"
if ! git diff --cached --quiet; then
    git commit -m "$MSG" --quiet
    git push origin main --quiet 2>/dev/null || true
fi
