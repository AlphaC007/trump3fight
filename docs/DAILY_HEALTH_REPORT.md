# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-16 22:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-16T13:26:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/29502168627
- Most recent run #2: success (schedule) · 2026-07-16T08:09:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/29482461474
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-16T13:26:12Z
- price_usd: 1.5640818753639132
- top10_holder_pct: 88.9654
- scenario_probabilities: Bull 0.4549, Base 0.4838, Stress 0.0613
- Probability drift: Bull -0.0077, Base +0.0017, Stress +0.0060

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
