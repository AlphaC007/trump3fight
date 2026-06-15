# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-16 01:46
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-15T17:03:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/27562757999
- Most recent run #2: success (schedule) · 2026-06-15T12:09:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/27545240053
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-15T17:03:18Z
- price_usd: 1.9975407472451316
- top10_holder_pct: 89.0281
- scenario_probabilities: Bull 0.4476, Base 0.4853, Stress 0.0671
- Probability drift: Bull +0.0079, Base -0.0016, Stress -0.0063

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
