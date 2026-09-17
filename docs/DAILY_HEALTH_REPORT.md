# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-18 01:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-17T15:58:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/35243640398
- Most recent run #2: success (schedule) · 2026-09-17T10:59:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/35213299451
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-17T15:58:18Z
- price_usd: 1.947716308637673
- top10_holder_pct: 88.2076
- scenario_probabilities: Bull 0.4461, Base 0.4856, Stress 0.0683
- Probability drift: Bull +0.0072, Base -0.0015, Stress -0.0057

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
