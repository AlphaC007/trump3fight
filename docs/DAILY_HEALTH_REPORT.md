# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-29 13:07
- Executive Summary: Core pipeline available; current risk assessment is [Under Pressure].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-29T03:54:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/26616936079
- Most recent run #2: success (schedule) · 2026-05-28T15:33:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/26584758792
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-29T03:54:16Z
- price_usd: 1.9016341442919058
- top10_holder_pct: 89.0925
- scenario_probabilities: Bull 0.3274, Base 0.4583, Stress 0.2143
- Probability drift: Bull -0.0834, Base -0.0252, Stress +0.1086

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Under Pressure]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
