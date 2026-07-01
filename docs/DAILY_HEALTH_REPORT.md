# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-01 13:15
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-01T04:07:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/28492805038
- Most recent run #2: success (schedule) · 2026-06-30T14:02:04Z · https://github.com/AlphaC007/trump3fight/actions/runs/28450208625
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-01T04:07:59Z
- price_usd: 1.6993319331167098
- top10_holder_pct: 88.4089
- scenario_probabilities: Bull 0.4374, Base 0.4874, Stress 0.0752
- Probability drift: Bull -0.0177, Base +0.0037, Stress +0.0140

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
