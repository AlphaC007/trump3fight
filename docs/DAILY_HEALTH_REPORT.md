# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-01 01:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-31T16:37:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/41220554984
- Most recent run #2: success (schedule) · 2026-10-31T11:42:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/41197934436
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-31T16:37:18Z
- price_usd: 1.5819273853527336
- top10_holder_pct: 88.629
- scenario_probabilities: Bull 0.4801, Base 0.4185, Stress 0.1014
- Probability drift: Bull +0.0649, Base -0.0754, Stress +0.0105

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
