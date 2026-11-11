# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-12 03:53
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-11T19:04:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/43083784303
- Most recent run #2: success (schedule) · 2026-11-11T13:34:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/43030396727
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-11T19:04:50Z
- price_usd: 1.1431605817302262
- top10_holder_pct: 88.4247
- scenario_probabilities: Bull 0.4092, Base 0.4951, Stress 0.0957
- Probability drift: Bull +0.0020, Base -0.0004, Stress -0.0016

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
