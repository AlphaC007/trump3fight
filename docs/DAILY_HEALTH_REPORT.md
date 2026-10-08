# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-08 14:52
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-08T05:06:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/37730725156
- Most recent run #2: success (schedule) · 2026-10-07T18:13:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/37665126339
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-08T05:06:43Z
- price_usd: 1.8438301206810002
- top10_holder_pct: 88.6142
- scenario_probabilities: Bull 0.4887, Base 0.4103, Stress 0.101
- Probability drift: Bull +0.0091, Base -0.0087, Stress -0.0004

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
