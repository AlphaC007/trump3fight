# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-07 14:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-07T04:56:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/37573846535
- Most recent run #2: success (schedule) · 2026-10-06T17:41:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/37505456361
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-07T04:56:27Z
- price_usd: 1.882500801744258
- top10_holder_pct: 88.6132
- scenario_probabilities: Bull 0.4145, Base 0.4939, Stress 0.0916
- Probability drift: Bull +0.0059, Base -0.0013, Stress -0.0046

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
