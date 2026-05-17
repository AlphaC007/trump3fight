# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-17 12:48
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-17T03:41:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/25980484721
- Most recent run #2: success (schedule) · 2026-05-16T13:05:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/25962680690
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-17T03:41:36Z
- price_usd: 2.172145147342046
- top10_holder_pct: 89.0212
- scenario_probabilities: Bull 0.4334, Base 0.4883, Stress 0.0783
- Probability drift: Bull -0.0032, Base +0.0007, Stress +0.0025

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
