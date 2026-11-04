# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-04 15:06
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-04T05:22:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/41778837415
- Most recent run #2: success (schedule) · 2026-11-03T18:53:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/41698108312
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-04T05:22:26Z
- price_usd: 1.5097504271194164
- top10_holder_pct: 88.1518
- scenario_probabilities: Bull 0.4811, Base 0.4176, Stress 0.1013
- Probability drift: Bull +0.0658, Base -0.0762, Stress +0.0104

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
