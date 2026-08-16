# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-16 21:21
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-16T12:22:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/31946883184
- Most recent run #2: success (schedule) · 2026-08-16T06:35:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/31931801464
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-16T12:22:39Z
- price_usd: 1.395315180938473
- top10_holder_pct: 87.9312
- scenario_probabilities: Bull 0.4059, Base 0.4819, Stress 0.1122
- Probability drift: Bull +0.0787, Base +0.0240, Stress -0.1027

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
