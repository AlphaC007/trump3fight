# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-29 14:26
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-29T04:50:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/36523409985
- Most recent run #2: success (schedule) · 2026-09-28T19:02:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/36469429533
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-29T04:50:37Z
- price_usd: 1.953383814307468
- top10_holder_pct: 88.6496
- scenario_probabilities: Bull 0.4093, Base 0.4951, Stress 0.0956
- Probability drift: Bull -0.0056, Base +0.0012, Stress +0.0044

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
