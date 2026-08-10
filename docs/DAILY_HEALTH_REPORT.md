# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-10 22:07
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-10T12:51:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/31389965929
- Most recent run #2: success (schedule) · 2026-08-10T07:36:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/31366579291
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-10T12:51:24Z
- price_usd: 1.4894107630736113
- top10_holder_pct: 87.8909
- scenario_probabilities: Bull 0.4445, Base 0.4859, Stress 0.0696
- Probability drift: Bull +0.0029, Base -0.0006, Stress -0.0023

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
