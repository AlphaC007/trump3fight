# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-09 00:40
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-08T15:34:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/27148698820
- Most recent run #2: success (schedule) · 2026-06-08T10:50:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/27132670921
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-08T15:34:23Z
- price_usd: 1.7022563977742817
- top10_holder_pct: 88.955
- scenario_probabilities: Bull 0.455, Base 0.4838, Stress 0.0612
- Probability drift: Bull +0.0175, Base -0.0036, Stress -0.0139

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
