# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-06 04:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-05T19:16:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/42092365843
- Most recent run #2: success (schedule) · 2026-11-05T13:59:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/42040729088
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-05T19:17:01Z
- price_usd: 1.1950086460821214
- top10_holder_pct: 88.4368
- scenario_probabilities: Bull 0.4025, Base 0.4965, Stress 0.101
- Probability drift: Bull -0.0161, Base +0.0034, Stress +0.0127

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
