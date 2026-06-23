# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-23 12:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-23T03:48:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/28000811515
- Most recent run #2: success (schedule) · 2026-06-22T16:41:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/27968672359
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-23T03:49:04Z
- price_usd: 1.8466345993041873
- top10_holder_pct: 88.9876
- scenario_probabilities: Bull 0.4345, Base 0.488, Stress 0.0775
- Probability drift: Bull -0.0027, Base +0.0005, Stress +0.0022

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
