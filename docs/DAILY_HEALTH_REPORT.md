# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-25 11:48
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-25T02:41:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/24920678899
- Most recent run #2: success (schedule) · 2026-04-24T13:05:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/24891042660
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-25T02:41:59Z
- price_usd: 2.902564649471241
- top10_holder_pct: 89.0774
- scenario_probabilities: Bull 0.5293, Base 0.4021, Stress 0.0686
- Probability drift: Bull +0.0053, Base -0.0051, Stress -0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
