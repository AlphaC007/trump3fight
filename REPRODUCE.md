# Reproduce & Verify (Deterministic)

This repo is designed so an external reviewer (human or agent) can re-run the pipeline and verify that published artifacts are consistent.

## 1) Environment

```bash
python3 --version
pip install -r requirements.txt
```

## 2) Generate latest snapshot + report

```bash
# from repo root
python3 scripts/generate_report.py
```

Expected output artifacts:
- `data/snapshots/YYYY-MM-DD.snapshot.json`
- `reports/cio_briefings/YYYY-MM-DD-CIO-Report.md`
- `docs/assets/data/trends.json`

## 3) Verify integrity against manifest

```bash
# print manifest
cat data/manifest.json

# verify hashes locally
sha256sum \
  data/snapshots/2026-03-04.snapshot.json \
  docs/assets/data/trends.json \
  reports/cio_briefings/2026-03-04-CIO-Report.md
```

Compare results with `data/manifest.json`.

## 4) Build and preview published docs

```bash
mkdocs build
mkdocs serve
```

Then validate these routes locally:
- `/for-agents/`
- `/trust/`
- `/cio-reports/latest/`
- `/trends/`

## Notes
- This repository is for research and education only (not investment advice).
- Bull-first interpretation is always constrained by explicit invalidation boundaries.
