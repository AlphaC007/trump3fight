# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-20 02:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-19T18:04:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/39299490180
- Most recent run #2: success (schedule) · 2026-10-19T12:10:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/39249956412
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-19T18:04:39Z
- price_usd: 1.7019316519868473
- top10_holder_pct: 88.1388
- scenario_probabilities: Bull 0.4017, Base 0.4967, Stress 0.1016
- Probability drift: Bull +0.0019, Base -0.0004, Stress -0.0015

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
