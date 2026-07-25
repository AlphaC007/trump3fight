# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-25 22:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-25T13:06:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/30159125183
- Most recent run #2: success (schedule) · 2026-07-25T08:03:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/30150416954
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-25T13:06:50Z
- price_usd: 1.5486521316074136
- top10_holder_pct: 87.8398
- scenario_probabilities: Bull 0.4446, Base 0.4859, Stress 0.0695
- Probability drift: Bull +0.0029, Base -0.0006, Stress -0.0023

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
