# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-13 13:15
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-13T04:01:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/27455959187
- Most recent run #2: success (schedule) · 2026-06-12T14:40:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/27422791198
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-13T04:01:50Z
- price_usd: 2.2875402857838165
- top10_holder_pct: 89.318
- scenario_probabilities: Bull 0.5097, Base 0.3999, Stress 0.0904
- Probability drift: Bull +0.0730, Base -0.0890, Stress +0.0160

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
