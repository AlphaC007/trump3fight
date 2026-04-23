# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-23 23:03
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-23T13:09:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/24837068032
- Most recent run #2: success (schedule) · 2026-04-23T07:50:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/24823556949
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-23T13:09:22Z
- price_usd: 2.8587220235840665
- top10_holder_pct: 88.8175
- scenario_probabilities: Bull 0.4626, Base 0.4821, Stress 0.0553
- Probability drift: Bull +0.0001, Base -0.0001, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
