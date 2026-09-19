# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-20 00:06
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-19T15:07:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/35450807855
- Most recent run #2: success (schedule) · 2026-09-19T10:19:58Z · https://github.com/AlphaC007/trump3fight/actions/runs/35437105140
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-19T15:07:18Z
- price_usd: 2.066261343034056
- top10_holder_pct: 88.0769
- scenario_probabilities: Bull 0.3956, Base 0.4979, Stress 0.1065
- Probability drift: Bull -0.0480, Base +0.0118, Stress +0.0362

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
