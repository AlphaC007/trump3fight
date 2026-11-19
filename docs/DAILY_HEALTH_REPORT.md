# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-19 16:12
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-19T06:28:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/44472444257
- Most recent run #2: success (schedule) · 2026-11-18T19:47:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/44384058154
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-19T06:28:51Z
- price_usd: 0.9661325287133166
- top10_holder_pct: 88.4019
- scenario_probabilities: Bull 0.4007, Base 0.4968, Stress 0.1025
- Probability drift: Bull +0.0012, Base -0.0003, Stress -0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
