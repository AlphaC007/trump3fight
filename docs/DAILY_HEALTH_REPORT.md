# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-23 22:22
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-23T13:07:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/26333520055
- Most recent run #2: success (schedule) · 2026-05-23T08:17:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/26327893658
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-23T13:07:30Z
- price_usd: 2.020431314713554
- top10_holder_pct: 89.1529
- scenario_probabilities: Bull 0.4118, Base 0.4838, Stress 0.1044
- Probability drift: Bull -0.0073, Base -0.0024, Stress +0.0097

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
