# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-20 12:16
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-20T02:56:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/24646269237
- Most recent run #2: success (schedule) · 2026-04-19T12:43:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/24629371996
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-20T02:56:46Z
- price_usd: 2.831725375157504
- top10_holder_pct: 88.7769
- scenario_probabilities: Bull 0.5243, Base 0.4069, Stress 0.0688
- Probability drift: Bull +0.0021, Base -0.0021, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
