# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-04 11:28
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-04T02:28:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/23969413091
- Most recent run #2: success (schedule) · 2026-04-03T12:44:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/23946618605
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-04T02:28:36Z
- price_usd: 2.7881867021782476
- top10_holder_pct: 88.2962
- scenario_probabilities: Bull 0.4228, Base 0.4874, Stress 0.0898
- Probability drift: Bull -0.0201, Base +0.0012, Stress +0.0189

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
