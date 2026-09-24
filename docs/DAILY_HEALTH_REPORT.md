# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-25 01:35
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-24T16:14:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/36025978252
- Most recent run #2: success (schedule) · 2026-09-24T11:07:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/35991225020
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-24T16:14:42Z
- price_usd: 2.0723911712184333
- top10_holder_pct: 88.3982
- scenario_probabilities: Bull 0.3858, Base 0.5, Stress 0.1142
- Probability drift: Bull -0.0109, Base +0.0023, Stress +0.0086

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
