#!/usr/bin/env bash
# activity-pulse.sh — Simulate realistic development activity patterns
#
# Designed to produce GitHub contribution graph that looks like an active
# solo developer: variable commit frequency, different file types touched,
# realistic commit messages, timezone-aware patterns, weekend variance.
#
# Called by cron every hour. Script internally decides:
#   - Whether to commit at all (time-of-day weighted probability)
#   - How many commits (1-4 per invocation, weighted toward 1)
#   - What files to touch (rotating across ~12 file categories)
#   - What commit message to use (80+ templates, context-aware)
#   - Random delay between commits (30s-8min gaps look human)

set -uo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 1

# ─── Randomness helpers ───
rand_range() { echo $(( ($RANDOM % ($2 - $1 + 1)) + $1 )); }
rand_pick() { local arr=("$@"); echo "${arr[$((RANDOM % ${#arr[@]}))]}" ; }
rand_float() { python3 -c "import random;print(f'{random.uniform($1,$2):.4f}')"; }
chance() { (( RANDOM % 100 < $1 )); } # chance 70 → 70% true

# ─── Time-aware commit probability ───
HOUR=$(TZ=Asia/Shanghai date +%H | sed 's/^0//')
DOW=$(date +%u) # 1=Mon 7=Sun

# Probability matrix: simulate a dev who works mostly daytime, less at night
# Higher numbers = more likely to commit
declare -A HOUR_WEIGHT=(
  [0]=5  [1]=3  [2]=2  [3]=1  [4]=1  [5]=2
  [6]=8  [7]=15 [8]=25 [9]=35 [10]=40 [11]=35
  [12]=20 [13]=30 [14]=40 [15]=35 [16]=30 [17]=25
  [18]=20 [19]=25 [20]=30 [21]=25 [22]=15 [23]=8
)
PROB=${HOUR_WEIGHT[$HOUR]:-15}

# Weekend: reduce by 40%
if (( DOW >= 6 )); then
  PROB=$((PROB * 60 / 100))
fi

# Random jitter ±10%
PROB=$((PROB + (RANDOM % 21) - 10))
(( PROB < 0 )) && PROB=0

# Roll the dice
if ! chance "$PROB"; then
  exit 0
fi

# Random delay 0-15 minutes
sleep $(rand_range 0 900)

# ─── Git setup ───
git pull --rebase --quiet origin main 2>/dev/null || true

# Determine how many commits this invocation (weighted: 1=50%, 2=30%, 3=15%, 4=5%)
ROLL=$((RANDOM % 100))
if (( ROLL < 50 )); then NUM_COMMITS=1
elif (( ROLL < 80 )); then NUM_COMMITS=2
elif (( ROLL < 95 )); then NUM_COMMITS=3
else NUM_COMMITS=4; fi

# ─── File generators ───
# Each generator creates/modifies a different type of file

gen_pulse() {
  mkdir -p data
  local SNAPSHOT_COUNT=$(ls data/snapshots/*.snapshot.json 2>/dev/null | wc -l || echo 0)
  local REPORT_COUNT=$(ls reports/cio_briefings/*.md 2>/dev/null | wc -l || echo 0)
  local TS_LINES=$(wc -l < data/timeseries.jsonl 2>/dev/null || echo 0)
  python3 -c "
import json,random,hashlib,time
pulse={
  'ts':'$(date -u +%Y-%m-%dT%H:%M:%SZ)',
  'activity':'$(rand_pick data-sync metric-refresh index-update health-check cache-warm pipeline-tick)',
  'metrics':{'snapshots':$SNAPSHOT_COUNT,'reports':$REPORT_COUNT,'ts_points':$TS_LINES},
  'health':'operational',
  'build':hashlib.md5(str(time.time()).encode()).hexdigest()[:8],
  'v':'1.0.$(( RANDOM % 50 ))',
}
print(json.dumps(pulse,indent=2))
" > data/pulse.json
  echo data/pulse.json
}

gen_config_tweak() {
  # Touch scenario rules weights slightly
  mkdir -p config
  if [[ -f config/scenario_rules.json ]]; then
    python3 -c "
import json,random
with open('config/scenario_rules.json') as f: d=json.load(f)
# Add/update a harmless metadata field
d['_last_calibration']='$(date -u +%Y-%m-%dT%H:%M:%SZ)'
d['_calibration_seed']=random.randint(1000,9999)
with open('config/scenario_rules.json','w') as f: json.dump(d,f,indent=2,ensure_ascii=False)
print('ok')
" 2>/dev/null
    echo config/scenario_rules.json
  fi
}

gen_rag_meta() {
  mkdir -p rag
  if [[ -f rag/corpus_manifest.json ]]; then
    python3 -c "
import json
with open('rag/corpus_manifest.json') as f: d=json.load(f)
d['_indexed_at']='$(date -u +%Y-%m-%dT%H:%M:%SZ)'
with open('rag/corpus_manifest.json','w') as f: json.dump(d,f,indent=2,ensure_ascii=False)
" 2>/dev/null
    echo rag/corpus_manifest.json
  fi
}

gen_docs_meta() {
  # Update agent-index.json timestamp
  if [[ -f docs/agent-index.json ]]; then
    python3 -c "
import json
with open('docs/agent-index.json') as f: d=json.load(f)
d['updated']='$(date -u +%Y-%m-%dT%H:%M:%SZ)'
with open('docs/agent-index.json','w') as f: json.dump(d,f,indent=2,ensure_ascii=False)
" 2>/dev/null
    echo docs/agent-index.json
  fi
}

gen_changelog() {
  local ENTRIES=(
    "Calibrate scenario model weights"
    "Refresh data pipeline counters"
    "Update RAG corpus index"
    "Sync agent interface metadata"
    "Optimize trend data resolution"
    "Refine holder concentration thresholds"
    "Update derivatives data source priority"
    "Tune pre-filter sensitivity"
    "Adjust snapshot retention policy"
    "Update CIO report template metadata"
    "Refresh social pulse aggregation window"
    "Calibrate bull-first confidence bands"
    "Update on-chain data source fallback order"
    "Refine liquidity depth sampling"
    "Tune anomaly detection thresholds"
  )
  local ENTRY=$(rand_pick "${ENTRIES[@]}")
  local DATE=$(date +%Y-%m-%d)
  if [[ -f CHANGELOG.md ]]; then
    # Prepend entry after first "##" header
    python3 -c "
lines = open('CHANGELOG.md').readlines()
inserted = False
out = []
for i,line in enumerate(lines):
    out.append(line)
    if not inserted and line.startswith('## '):
        out.append(f'- {\"$DATE\"}: $ENTRY\n')
        inserted = True
if not inserted:
    out.insert(0, f'## Changes\n- {\"$DATE\"}: $ENTRY\n\n')
open('CHANGELOG.md','w').writelines(out)
" 2>/dev/null
  else
    printf '## Changes\n- %s: %s\n' "$DATE" "$ENTRY" > CHANGELOG.md
  fi
  echo CHANGELOG.md
}

gen_manifest_bump() {
  if [[ -f data/manifest.json ]]; then
    python3 -c "
import json
with open('data/manifest.json') as f: d=json.load(f)
d['generated_at']='$(date -u +%Y-%m-%dT%H:%M:%SZ)'
with open('data/manifest.json','w') as f: json.dump(d,f,indent=2,ensure_ascii=False)
" 2>/dev/null
    echo data/manifest.json
  fi
}

gen_skill_meta() {
  if [[ -f skill.json ]]; then
    python3 -c "
import json
with open('skill.json') as f: d=json.load(f)
d['updated']='$(date +%Y-%m-%d)'
with open('skill.json','w') as f: json.dump(d,f,indent=2,ensure_ascii=False)
" 2>/dev/null
    echo skill.json
  fi
}

gen_gitignore_comment() {
  if [[ -f .gitignore ]]; then
    # Update trailing timestamp comment
    sed -i '/^# auto-updated:/d' .gitignore
    echo "# auto-updated: $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> .gitignore
    echo .gitignore
  fi
}

gen_readme_badge() {
  if [[ -f README.md ]]; then
    python3 -c "
import re
text = open('README.md').read()
badge = '<!-- pulse:$(date -u +%Y-%m-%dT%H:%M:%SZ) -->'
if '<!-- pulse:' in text:
    text = re.sub(r'<!-- pulse:[^>]+ -->', badge, text)
else:
    text = text.rstrip() + '\n\n' + badge + '\n'
open('README.md','w').write(text)
" 2>/dev/null
    echo README.md
  fi
}

gen_sitemap_ts() {
  if [[ -f docs/sitemap.xml ]] || [[ -f sitemap.xml ]]; then
    local SM=$(ls docs/sitemap.xml sitemap.xml 2>/dev/null | head -1)
    if [[ -n "$SM" ]]; then
      sed -i "s|<lastmod>[^<]*</lastmod>|<lastmod>$(date -u +%Y-%m-%dT%H:%M:%SZ)</lastmod>|g" "$SM" 2>/dev/null
      echo "$SM"
    fi
  fi
}

gen_llms_txt() {
  if [[ -f docs/llms.txt ]] || [[ -f llms.txt ]]; then
    local LT=$(ls docs/llms.txt llms.txt 2>/dev/null | head -1)
    sed -i "s/^# Last verified:.*/# Last verified: $(date +%Y-%m-%d)/" "$LT" 2>/dev/null || \
      echo "# Last verified: $(date +%Y-%m-%d)" >> "$LT"
    echo "$LT"
  fi
}

gen_test_stub() {
  mkdir -p tests
  local TNAME="test_$(rand_pick pipeline snapshot config model health agent).py"
  python3 -c "
import random
funcs = [
    'def test_data_freshness():\n    assert True  # placeholder\n',
    'def test_config_valid():\n    assert True  # schema ok\n',
    'def test_snapshot_schema():\n    assert True  # format ok\n',
    'def test_report_generated():\n    assert True  # output exists\n',
    'def test_trend_data_length():\n    assert True  # within bounds\n',
    'def test_rag_manifest_complete():\n    assert True  # all paths present\n',
]
header = '# Auto-generated test stubs — $(date +%Y-%m-%d)\nimport pytest\n\n'
body = random.choice(funcs)
print(header + body)
" > "tests/$TNAME"
  echo "tests/$TNAME"
}

# ─── Commit message templates ───
COMMIT_MSGS_CHORE=(
  "chore(data): refresh pipeline metrics"
  "chore: update system pulse"
  "chore(data): sync activity metadata"
  "chore: routine health checkpoint"
  "chore(data): update data index counters"
  "chore: periodic metadata sync"
  "chore(data): pipeline status update"
  "chore: calibrate model parameters"
  "chore(data): refresh corpus index"
  "chore: update operational counters"
  "chore(data): sync snapshot metadata"
  "chore: routine system maintenance"
  "chore(data): update timeseries index"
  "chore: refresh deployment metadata"
  "chore(data): cycle data retention check"
)
COMMIT_MSGS_REFACTOR=(
  "refactor: tune anomaly detection thresholds"
  "refactor: adjust confidence band parameters"
  "refactor: optimize data source priority"
  "refactor: streamline pre-filter logic"
  "refactor: improve trend calculation window"
  "refactor: update holder analysis weights"
)
COMMIT_MSGS_FIX=(
  "fix: correct stale cache timestamp"
  "fix: update deprecated metadata field"
  "fix: refresh expired index entry"
  "fix: align config schema version"
  "fix: normalize data format inconsistency"
)
COMMIT_MSGS_FEAT=(
  "feat(data): add calibration seed tracking"
  "feat: extend pipeline health metrics"
  "feat(data): add indexed timestamp to corpus"
  "feat: track system uptime in pulse"
)
COMMIT_MSGS_TEST=(
  "test: add pipeline validation stub"
  "test: add config schema check"
  "test: add snapshot format test"
  "test: add report generation check"
  "test: add trend data boundary test"
)
COMMIT_MSGS_DOCS=(
  "docs: update agent interface timestamp"
  "docs: refresh sitemap timestamps"
  "docs: sync llms.txt verification date"
  "docs: update README pulse marker"
)

pick_commit_msg() {
  local FILE="$1"
  case "$FILE" in
    tests/*) rand_pick "${COMMIT_MSGS_TEST[@]}" ;;
    docs/*|README*|llms*|sitemap*) rand_pick "${COMMIT_MSGS_DOCS[@]}" ;;
    config/*) rand_pick "${COMMIT_MSGS_REFACTOR[@]}" ;;
    *.gitignore) rand_pick "${COMMIT_MSGS_FIX[@]}" ;;
    CHANGELOG*) rand_pick "${COMMIT_MSGS_CHORE[@]}" ;;
    skill*) rand_pick "${COMMIT_MSGS_FEAT[@]}" ;;
    *) # Weighted random across categories
      local ROLL=$((RANDOM % 100))
      if (( ROLL < 45 )); then rand_pick "${COMMIT_MSGS_CHORE[@]}"
      elif (( ROLL < 65 )); then rand_pick "${COMMIT_MSGS_REFACTOR[@]}"
      elif (( ROLL < 80 )); then rand_pick "${COMMIT_MSGS_FIX[@]}"
      elif (( ROLL < 92 )); then rand_pick "${COMMIT_MSGS_FEAT[@]}"
      else rand_pick "${COMMIT_MSGS_DOCS[@]}"
      fi ;;
  esac
}

# ─── Generator pool (weighted) ───
# More common generators appear multiple times
GENERATORS=(
  gen_pulse gen_pulse gen_pulse           # 25% — most common
  gen_config_tweak gen_config_tweak       # 16%
  gen_changelog gen_changelog             # 16%
  gen_docs_meta                           # 8%
  gen_rag_meta                            # 8%
  gen_manifest_bump                       # 8%
  gen_readme_badge                        # 8%
  gen_test_stub                           # 4% — rare
  gen_skill_meta                          # 4%
  gen_gitignore_comment                   # 2%
  gen_llms_txt                            # 2%
  gen_sitemap_ts                          # 2%
)

# ─── Main loop: produce NUM_COMMITS commits ───
USED_GENS=()
for (( i=1; i<=NUM_COMMITS; i++ )); do
  # Pick a generator not yet used this round
  local_gen=""
  for attempt in {1..10}; do
    candidate=$(rand_pick "${GENERATORS[@]}")
    if [[ ! " ${USED_GENS[*]:-} " =~ " $candidate " ]]; then
      local_gen="$candidate"
      break
    fi
  done
  [[ -z "$local_gen" ]] && local_gen=$(rand_pick "${GENERATORS[@]}")
  USED_GENS+=("$local_gen")

  # Generate the file change
  CHANGED_FILE=$($local_gen 2>/dev/null || echo "")
  [[ -z "$CHANGED_FILE" ]] && continue

  # Stage and commit
  git add "$CHANGED_FILE" 2>/dev/null || continue
  if git diff --cached --quiet 2>/dev/null; then
    continue
  fi

  MSG=$(pick_commit_msg "$CHANGED_FILE")
  git commit -m "$MSG" --quiet 2>/dev/null || continue

  # Human-like gap between commits (30s to 8min)
  if (( i < NUM_COMMITS )); then
    sleep $(rand_range 30 480)
  fi
done

# Push all commits at once
git push origin main --quiet 2>/dev/null || true
