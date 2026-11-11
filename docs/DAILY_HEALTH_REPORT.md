# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-11 15:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-11T05:13:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/42964312395
- Most recent run #2: success (schedule) · 2026-11-10T19:07:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/42882178140
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-11T05:13:25Z
- price_usd: 1.1274691061399715
- top10_holder_pct: 88.4196
- scenario_probabilities: Bull 0.4056, Base 0.4958, Stress 0.0986
- Probability drift: Bull +0.0040, Base -0.0009, Stress -0.0031

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
