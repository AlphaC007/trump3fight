# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-31 14:28
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-31T04:24:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/33356984423
- Most recent run #2: success (schedule) · 2026-08-30T15:48:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/33320675485
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-31T04:24:50Z
- price_usd: 2.3477984950909603
- top10_holder_pct: 89.4512
- scenario_probabilities: Bull 0.4446, Base 0.4859, Stress 0.0695
- Probability drift: Bull -0.0008, Base +0.0002, Stress +0.0006

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
