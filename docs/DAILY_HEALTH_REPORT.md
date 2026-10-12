# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-12 14:48
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-12T04:57:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/38205896543
- Most recent run #2: success (schedule) · 2026-10-11T17:08:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/38158385429
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-12T04:57:46Z
- price_usd: 1.9396151575758849
- top10_holder_pct: 88.5841
- scenario_probabilities: Bull 0.4814, Base 0.4173, Stress 0.1013
- Probability drift: Bull +0.0002, Base -0.0002, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
