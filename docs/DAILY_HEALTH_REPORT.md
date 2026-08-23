# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-23 21:22
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-23T12:23:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/32639243428
- Most recent run #2: success (schedule) · 2026-08-23T06:37:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/32623389621
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-23T12:23:25Z
- price_usd: 2.5925190250194654
- top10_holder_pct: 88.3918
- scenario_probabilities: Bull 0.4459, Base 0.4856, Stress 0.0685
- Probability drift: Bull +0.0045, Base -0.0023, Stress -0.0022

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
