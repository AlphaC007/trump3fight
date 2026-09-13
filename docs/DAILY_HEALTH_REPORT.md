# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-14 00:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-13T15:23:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/34765476493
- Most recent run #2: success (schedule) · 2026-09-13T11:06:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/34753564776
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-13T15:24:02Z
- price_usd: 1.9746001085052212
- top10_holder_pct: 88.3203
- scenario_probabilities: Bull 0.4393, Base 0.487, Stress 0.0737
- Probability drift: Bull -0.0075, Base +0.0015, Stress +0.0060

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
