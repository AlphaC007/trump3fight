# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-16 15:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-16T05:24:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/43810069398
- Most recent run #2: success (schedule) · 2026-11-15T18:18:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/43746016126
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-16T05:25:02Z
- price_usd: 0.9404955774693791
- top10_holder_pct: 88.2638
- scenario_probabilities: Bull 0.4005, Base 0.4969, Stress 0.1026
- Probability drift: Bull +0.0025, Base -0.0005, Stress -0.0020

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
