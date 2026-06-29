# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-29 13:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-29T04:10:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/28348026883
- Most recent run #2: success (schedule) · 2026-06-28T13:21:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/28323597784
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-29T04:10:54Z
- price_usd: 1.659235592092953
- top10_holder_pct: 88.3496
- scenario_probabilities: Bull 0.4398, Base 0.4869, Stress 0.0733
- Probability drift: Bull +0.0004, Base -0.0001, Stress -0.0003

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
