# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-24 12:14
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-24T02:52:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/24869743010
- Most recent run #2: success (schedule) · 2026-04-23T13:09:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/24837068032
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-24T02:52:42Z
- price_usd: 2.8644608187477667
- top10_holder_pct: 88.8432
- scenario_probabilities: Bull 0.5231, Base 0.4081, Stress 0.0688
- Probability drift: Bull +0.0605, Base -0.0740, Stress +0.0135

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
