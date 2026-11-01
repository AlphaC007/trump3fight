# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-01 15:00
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-01T04:58:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/41275071679
- Most recent run #2: success (schedule) · 2026-10-31T16:37:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/41220554984
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-01T04:58:07Z
- price_usd: 1.5836995687748214
- top10_holder_pct: 88.6289
- scenario_probabilities: Bull 0.4794, Base 0.4192, Stress 0.1014
- Probability drift: Bull -0.0007, Base +0.0007, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
