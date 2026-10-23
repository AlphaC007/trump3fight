# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-23 13:35
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-23T03:51:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/39897227261
- Most recent run #2: success (schedule) · 2026-10-22T16:23:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/39813621080
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-23T03:51:37Z
- price_usd: 1.7719150505908394
- top10_holder_pct: 88.2675
- scenario_probabilities: Bull 0.4816, Base 0.4171, Stress 0.1013
- Probability drift: Bull +0.0727, Base -0.0780, Stress +0.0053

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
