# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-05 15:35
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-05T05:41:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/41975628514
- Most recent run #2: success (schedule) · 2026-11-04T19:10:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/41894378570
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-05T05:41:57Z
- price_usd: 1.2583603550432712
- top10_holder_pct: 88.394
- scenario_probabilities: Bull 0.4701, Base 0.4213, Stress 0.1086
- Probability drift: Bull -0.0023, Base +0.0022, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
