# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-14 22:04
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-14T12:47:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/31801815198
- Most recent run #2: success (schedule) · 2026-08-14T07:21:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/31779587924
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-14T12:47:26Z
- price_usd: 1.377748380974293
- top10_holder_pct: 87.8959
- scenario_probabilities: Bull 0.4278, Base 0.489, Stress 0.0832
- Probability drift: Bull -0.0025, Base +0.0000, Stress +0.0025

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
