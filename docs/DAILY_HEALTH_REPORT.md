# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-14 22:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-14T13:10:26Z · https://github.com/AlphaC007/trump3fight/actions/runs/24400814123
- Most recent run #2: success (schedule) · 2026-04-14T07:43:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/24387193614
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-14T13:10:34Z
- price_usd: 2.8370834719288367
- top10_holder_pct: 88.224
- scenario_probabilities: Bull 0.4474, Base 0.4853, Stress 0.0673
- Probability drift: Bull -0.0014, Base +0.0002, Stress +0.0012

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
