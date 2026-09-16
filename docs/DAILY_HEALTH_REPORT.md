# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-17 01:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-16T15:52:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/35118224949
- Most recent run #2: success (schedule) · 2026-09-16T10:51:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/35087257623
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-16T15:52:28Z
- price_usd: 1.8197534987435247
- top10_holder_pct: 88.2301
- scenario_probabilities: Bull 0.4479, Base 0.4852, Stress 0.0669
- Probability drift: Bull +0.0599, Base +0.0269, Stress -0.0868

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
