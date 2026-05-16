# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-16 22:15
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-16T13:05:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/25962680690
- Most recent run #2: success (schedule) · 2026-05-16T08:02:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/25956832112
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-16T13:05:36Z
- price_usd: 2.155498724474475
- top10_holder_pct: 89.0454
- scenario_probabilities: Bull 0.4366, Base 0.4876, Stress 0.0758
- Probability drift: Bull +0.0014, Base -0.0003, Stress -0.0011

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
