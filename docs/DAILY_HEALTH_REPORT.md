# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-10 13:27
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-10T03:40:04Z · https://github.com/AlphaC007/trump3fight/actions/runs/34434195041
- Most recent run #2: success (schedule) · 2026-09-09T15:41:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/34371843274
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-10T03:40:12Z
- price_usd: 2.0169166064828166
- top10_holder_pct: 88.4525
- scenario_probabilities: Bull 0.4611, Base 0.4824, Stress 0.0565
- Probability drift: Bull +0.0025, Base -0.0005, Stress -0.0020

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
