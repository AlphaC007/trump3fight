# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-17 01:00
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-16T15:51:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/38927334088
- Most recent run #2: success (schedule) · 2026-10-16T10:43:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/38889117389
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-16T15:51:47Z
- price_usd: 1.8226337564975508
- top10_holder_pct: 88.2502
- scenario_probabilities: Bull 0.483, Base 0.4157, Stress 0.1013
- Probability drift: Bull +0.0000, Base +0.0000, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
