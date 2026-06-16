# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-16 14:26
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-16T04:26:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/27594118560
- Most recent run #2: success (schedule) · 2026-06-15T17:03:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/27562757999
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-16T04:26:48Z
- price_usd: 1.938476595680511
- top10_holder_pct: 89.0396
- scenario_probabilities: Bull 0.4594, Base 0.4828, Stress 0.0578
- Probability drift: Bull +0.0118, Base -0.0025, Stress -0.0093

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
