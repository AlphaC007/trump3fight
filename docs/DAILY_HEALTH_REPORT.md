# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-15 02:12
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-14T17:20:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/34874153527
- Most recent run #2: success (schedule) · 2026-09-14T11:50:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/34840246172
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-14T17:20:37Z
- price_usd: 2.031522577312874
- top10_holder_pct: 88.4344
- scenario_probabilities: Bull 0.4402, Base 0.4869, Stress 0.0729
- Probability drift: Bull +0.0077, Base -0.0016, Stress -0.0061

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
