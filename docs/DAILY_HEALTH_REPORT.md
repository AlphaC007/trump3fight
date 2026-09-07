# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-08 01:57
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-07T16:58:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/34145607492
- Most recent run #2: success (schedule) · 2026-09-07T11:36:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/34117511436
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-07T16:58:18Z
- price_usd: 2.275573160956245
- top10_holder_pct: 88.4931
- scenario_probabilities: Bull 0.4549, Base 0.4837, Stress 0.0614
- Probability drift: Bull +0.0036, Base -0.0008, Stress -0.0028

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
