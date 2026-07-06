# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-06 13:03
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-06T03:47:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/28766444053
- Most recent run #2: success (schedule) · 2026-07-05T13:14:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/28742011122
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-06T03:47:57Z
- price_usd: 1.6703453795191698
- top10_holder_pct: 88.8401
- scenario_probabilities: Bull 0.5267, Base 0.4046, Stress 0.0687
- Probability drift: Bull +0.0805, Base -0.0810, Stress +0.0005

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
