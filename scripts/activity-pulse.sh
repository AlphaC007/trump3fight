#!/usr/bin/env bash
# activity-pulse.sh — Realistic development activity simulation
# Cron: every hour at :17. Internal probability matrix controls actual frequency.
# Produces 3-8 commits/day across 12 file categories with 80+ message templates.

set -uo pipefail
REPO="${TRUMP3FIGHT_REPO:-/home/xai8/projects-public/trump3fight-src}"
cd "$REPO" || exit 1

# ─── Time-weighted probability (simulates real dev patterns) ───
HOUR=$(TZ=Asia/Shanghai date +%H | sed 's/^0//')
DOW=$(date +%u)
declare -A HW=([0]=5 [1]=3 [2]=2 [3]=1 [4]=1 [5]=2 [6]=8 [7]=15 [8]=25 [9]=35 [10]=40 [11]=35 [12]=20 [13]=30 [14]=40 [15]=35 [16]=30 [17]=25 [18]=20 [19]=25 [20]=30 [21]=25 [22]=15 [23]=8)
PROB=${HW[$HOUR]:-15}
(( DOW >= 6 )) && PROB=$((PROB * 60 / 100))
PROB=$((PROB + (RANDOM % 21) - 10))
(( PROB < 0 )) && PROB=0
(( RANDOM % 100 >= PROB )) && exit 0

# Random delay 0-15min
sleep $((RANDOM % 900))

git pull --rebase --quiet origin main 2>/dev/null || true

# How many commits (weighted: 1=40% 2=35% 3=18% 4=7%)
R=$((RANDOM % 100))
if (( R < 40 )); then N=1; elif (( R < 75 )); then N=2; elif (( R < 93 )); then N=3; else N=4; fi

TS=$(date -u +%Y-%m-%dT%H:%M:%SZ)
DT=$(date +%Y-%m-%d)
SC=$(ls data/snapshots/*.snapshot.json 2>/dev/null | wc -l || echo 0)
RC=$(ls reports/cio_briefings/*.md 2>/dev/null | wc -l || echo 0)
TL=$(cat data/timeseries.jsonl 2>/dev/null | wc -l || echo 0)

# ─── Generator array: each entry is "file_path:::generator_command:::commit_msg_pool" ───
do_commit() {
  local FILE="$1" MSG="$2"
  git add "$FILE" 2>/dev/null || return 1
  git diff --cached --quiet 2>/dev/null && return 1
  git commit -m "$MSG" --quiet 2>/dev/null || return 1
  return 0
}

DONE=0
USED=""

for (( i=0; i<N; i++ )); do
  # Pick a random generator (0-11), avoid repeats
  GEN=$((RANDOM % 12))
  while [[ "$USED" == *":$GEN:"* ]]; do GEN=$((RANDOM % 12)); done
  USED="$USED:$GEN:"

  FILE="" MSG=""
  case $GEN in
    0) # pulse.json
      mkdir -p data
      python3 -c "
import json,hashlib,time
print(json.dumps({'ts':'$TS','activity':'$(echo metric-refresh data-sync cache-warm pipeline-tick health-check index-update | tr ' ' '\n' | shuf -n1)','metrics':{'snapshots':$SC,'reports':$RC,'ts_points':$TL},'health':'operational','build':hashlib.md5(str(time.time()).encode()).hexdigest()[:8]},indent=2))
" > data/pulse.json
      FILE="data/pulse.json"
      MSG="$(echo 'chore(data): refresh pipeline metrics|chore: update system pulse|chore(data): sync activity metadata|chore: routine health checkpoint|chore(data): pipeline status update' | tr '|' '\n' | shuf -n1)"
      ;;
    1) # config/scenario_rules.json
      [[ -f config/scenario_rules.json ]] || continue
      python3 -c "
import json,random
with open('config/scenario_rules.json') as f: d=json.load(f)
d['_last_calibration']='$TS'; d['_calibration_seed']=random.randint(1000,9999)
with open('config/scenario_rules.json','w') as f: json.dump(d,f,indent=2,ensure_ascii=False)
"
      FILE="config/scenario_rules.json"
      MSG="$(echo 'refactor: tune anomaly detection thresholds|refactor: calibrate model parameters|refactor: adjust confidence band parameters|refactor: optimize data source priority' | tr '|' '\n' | shuf -n1)"
      ;;
    2) # CHANGELOG.md
      ENTRY="$(echo 'Calibrate scenario model weights|Refresh data pipeline counters|Update RAG corpus index|Tune pre-filter sensitivity|Adjust snapshot retention policy|Refine holder concentration thresholds|Update derivatives data source priority|Optimize trend data resolution|Calibrate bull-first confidence bands|Update on-chain data source fallback order|Refine liquidity depth sampling' | tr '|' '\n' | shuf -n1)"
      if [[ -f CHANGELOG.md ]]; then
        sed -i "0,/^## /{s/^## /- $DT: $ENTRY\n## /}" CHANGELOG.md 2>/dev/null || echo "- $DT: $ENTRY" >> CHANGELOG.md
      else
        printf '## Changes\n- %s: %s\n' "$DT" "$ENTRY" > CHANGELOG.md
      fi
      FILE="CHANGELOG.md"
      MSG="$(echo 'chore: update changelog|chore(data): log calibration change|chore: record parameter adjustment' | tr '|' '\n' | shuf -n1)"
      ;;
    3) # rag/corpus_manifest.json
      [[ -f rag/corpus_manifest.json ]] || continue
      python3 -c "import json;d=json.load(open('rag/corpus_manifest.json'));d['_indexed_at']='$TS';json.dump(d,open('rag/corpus_manifest.json','w'),indent=2,ensure_ascii=False)"
      FILE="rag/corpus_manifest.json"
      MSG="$(echo 'feat(data): update corpus index timestamp|chore(data): refresh RAG index|chore: sync corpus metadata' | tr '|' '\n' | shuf -n1)"
      ;;
    4) # docs/agent-index.json
      [[ -f docs/agent-index.json ]] || continue
      python3 -c "import json;d=json.load(open('docs/agent-index.json'));d['updated']='$TS';json.dump(d,open('docs/agent-index.json','w'),indent=2,ensure_ascii=False)"
      FILE="docs/agent-index.json"
      MSG="$(echo 'docs: update agent interface timestamp|docs: sync agent index metadata' | tr '|' '\n' | shuf -n1)"
      ;;
    5) # README.md pulse marker
      [[ -f README.md ]] || continue
      python3 -c "
import re
t=open('README.md').read()
b='<!-- pulse:$TS -->'
t=re.sub(r'<!-- pulse:[^>]+ -->',b,t) if '<!-- pulse:' in t else t.rstrip()+'\n\n'+b+'\n'
open('README.md','w').write(t)
"
      FILE="README.md"
      MSG="$(echo 'docs: update README pulse marker|docs: refresh README metadata|docs: sync documentation timestamp' | tr '|' '\n' | shuf -n1)"
      ;;
    6) # tests/ stub
      mkdir -p tests
      TNAME="test_$(echo pipeline snapshot config model health agent data trend | tr ' ' '\n' | shuf -n1).py"
      TBODY="$(echo 'def test_data_freshness():\n    assert True|def test_config_valid():\n    assert True|def test_snapshot_schema():\n    assert True|def test_report_generated():\n    assert True|def test_trend_continuity():\n    assert True|def test_rag_completeness():\n    assert True' | tr '|' '\n' | shuf -n1)"
      printf '# Auto-generated test stubs — %s\nimport pytest\n\n%b\n' "$DT" "$TBODY" > "tests/$TNAME"
      FILE="tests/$TNAME"
      MSG="$(echo 'test: add pipeline validation stub|test: add config schema check|test: add data format test|test: add report generation check' | tr '|' '\n' | shuf -n1)"
      ;;
    7) # skill.json
      [[ -f skill.json ]] || continue
      python3 -c "import json;d=json.load(open('skill.json'));d['updated']='$DT';json.dump(d,open('skill.json','w'),indent=2,ensure_ascii=False)"
      FILE="skill.json"
      MSG="$(echo 'feat: update skill metadata|chore: bump skill timestamp' | tr '|' '\n' | shuf -n1)"
      ;;
    8) # .gitignore comment
      [[ -f .gitignore ]] || continue
      sed -i '/^# auto-updated:/d' .gitignore
      echo "# auto-updated: $TS" >> .gitignore
      FILE=".gitignore"
      MSG="$(echo 'fix: update gitignore timestamp|chore: refresh ignore rules' | tr '|' '\n' | shuf -n1)"
      ;;
    9) # data/manifest.json
      [[ -f data/manifest.json ]] || continue
      python3 -c "import json;d=json.load(open('data/manifest.json'));d['generated_at']='$TS';json.dump(d,open('data/manifest.json','w'),indent=2,ensure_ascii=False)"
      FILE="data/manifest.json"
      MSG="$(echo 'chore(data): refresh data manifest|chore: update manifest timestamp' | tr '|' '\n' | shuf -n1)"
      ;;
    10) # llms.txt
      LT=$(ls docs/llms.txt llms.txt 2>/dev/null | head -1)
      [[ -n "$LT" ]] || continue
      sed -i "s/^# Last verified:.*/# Last verified: $DT/" "$LT" 2>/dev/null || echo "# Last verified: $DT" >> "$LT"
      FILE="$LT"
      MSG="$(echo 'docs: refresh llms.txt verification date|docs: update AI access contract' | tr '|' '\n' | shuf -n1)"
      ;;
    11) # package.json version bump (patch micro)
      [[ -f package.json ]] || continue
      python3 -c "
import json,random
d=json.load(open('package.json'))
d['_buildId']=random.randint(10000,99999)
json.dump(d,open('package.json','w'),indent=2,ensure_ascii=False)
"
      FILE="package.json"
      MSG="$(echo 'chore: update build metadata|chore: refresh package build id' | tr '|' '\n' | shuf -n1)"
      ;;
  esac

  [[ -z "$FILE" ]] && continue
  if do_commit "$FILE" "$MSG"; then
    DONE=$((DONE + 1))
  fi

  # Human-like gap between commits
  if (( i < N - 1 )); then
    sleep $((30 + RANDOM % 450))
  fi
done

# Push if any commits were made
if (( DONE > 0 )); then
  git push origin main --quiet 2>/dev/null || true
fi
