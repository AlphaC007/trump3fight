# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-01 02:09
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-30T17:21:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/36750774732
- Most recent run #2: success (schedule) · 2026-09-30T11:56:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/36711609930
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-30T17:21:25Z
- price_usd: 2.0598837612020877
- top10_holder_pct: 88.7328
- scenario_probabilities: Bull 0.4811, Base 0.4176, Stress 0.1013
- Probability drift: Bull +0.0010, Base -0.0009, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
