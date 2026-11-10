# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-10 15:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-10T06:27:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/42768607749
- Most recent run #2: success (schedule) · 2026-11-09T21:47:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/42705873382
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-10T06:27:25Z
- price_usd: 1.1247946697173168
- top10_holder_pct: 88.4313
- scenario_probabilities: Bull 0.4032, Base 0.4964, Stress 0.1004
- Probability drift: Bull -0.0062, Base +0.0013, Stress +0.0049

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
