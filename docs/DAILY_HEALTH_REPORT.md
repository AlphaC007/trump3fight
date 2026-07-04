# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-04 22:20
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-04T13:06:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/28707159710
- Most recent run #2: success (schedule) · 2026-07-04T08:34:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/28700674205
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-04T13:06:17Z
- price_usd: 1.7819315083495242
- top10_holder_pct: 88.5405
- scenario_probabilities: Bull 0.448, Base 0.4852, Stress 0.0668
- Probability drift: Bull +0.0017, Base -0.0003, Stress -0.0014

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
