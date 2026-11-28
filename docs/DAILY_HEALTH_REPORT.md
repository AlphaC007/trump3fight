# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-28 16:35
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-28T06:51:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/46118540676
- Most recent run #2: success (schedule) · 2026-11-27T20:30:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/46064109077
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-28T06:51:38Z
- price_usd: 0.8058410329950121
- top10_holder_pct: 87.9651
- scenario_probabilities: Bull 0.4828, Base 0.4159, Stress 0.1013
- Probability drift: Bull +0.0041, Base -0.0040, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
