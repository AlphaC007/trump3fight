# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-29 23:00
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-29T13:28:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/25111709600
- Most recent run #2: success (schedule) · 2026-04-29T08:14:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/25098126366
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-29T13:28:35Z
- price_usd: 2.400860854479619
- top10_holder_pct: 89.0082
- scenario_probabilities: Bull 0.5243, Base 0.4069, Stress 0.0688
- Probability drift: Bull +0.0009, Base -0.0009, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
