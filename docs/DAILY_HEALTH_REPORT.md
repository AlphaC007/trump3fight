# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-19 21:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-19T12:43:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/24629371996
- Most recent run #2: success (schedule) · 2026-04-19T07:17:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/24623625469
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-19T12:43:22Z
- price_usd: 2.8599207083357467
- top10_holder_pct: 88.787
- scenario_probabilities: Bull 0.5222, Base 0.409, Stress 0.0688
- Probability drift: Bull +0.0699, Base -0.0753, Stress +0.0054

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
