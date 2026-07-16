# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-16 11:56
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-16T02:46:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/29467370085
- Most recent run #2: success (schedule) · 2026-07-15T13:19:25Z · https://github.com/AlphaC007/trump3fight/actions/runs/29418699361
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-16T02:46:14Z
- price_usd: 1.5821717724420492
- top10_holder_pct: 88.9575
- scenario_probabilities: Bull 0.4545, Base 0.4838, Stress 0.0617
- Probability drift: Bull +0.0079, Base -0.0017, Stress -0.0062

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
