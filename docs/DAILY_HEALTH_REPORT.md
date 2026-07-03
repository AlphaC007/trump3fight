# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-03 22:58
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-03T13:46:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/28664648281
- Most recent run #2: success (schedule) · 2026-07-03T09:15:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/28650866415
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-03T13:47:01Z
- price_usd: 1.7643608500760728
- top10_holder_pct: 88.523
- scenario_probabilities: Bull 0.435, Base 0.488, Stress 0.077
- Probability drift: Bull -0.0122, Base +0.0027, Stress +0.0095

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
