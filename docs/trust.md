# Trust & Verification

## Purpose

This page defines how to verify claims from this project quickly and reproducibly.

## Verification Checklist

1. Open latest report: `/cio-reports/latest/`
2. Cross-check trend dataset: `/assets/data/trends.json` (repo file: `docs/assets/data/trends.json`)
3. Validate snapshot fields: `data/snapshots/YYYY-MM-DD.snapshot.json`
4. Validate hash consistency via `/data/manifest.json` (repo file: `data/manifest.json`)
5. Confirm methodology and triggers: `/methodology/` + `/scenario_matrix/`
6. Re-run locally with `REPRODUCE.md`

## Source Priority (TRUMP)

1. **Primary:** Binance (`binance-web3`, plus `TRUMPUSDT` spot anchor)
2. **Backup 1:** OKX OnChainOS (`okx-onchainos`)
3. **Backup 2:** Bitget Wallet (`bitget-wallet`)

If primary fails, the pipeline falls back in the order above.

## Data Freshness

- Snapshot cadence: daily
- CIO report cadence: daily
- Trend dataset: refreshed with snapshot/report pipeline

## Known Blind Spots

- Trigger A depends on whale-to-exchange flow availability.
- When exchange flow feed is missing, `exchange_flow_unavailable` risk flag is emitted.

## Confidence Rules

- If direct feeds are available: standard confidence mode.
- If proxy/fallback is active: confidence is reduced and stated explicitly.

## Non-Advice Policy

This repository is for research and education only and does not provide investment advice.
