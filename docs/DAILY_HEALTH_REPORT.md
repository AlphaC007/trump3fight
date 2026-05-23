# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-23 12:33
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-23T03:31:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/26322352274
- Most recent run #2: success (schedule) · 2026-05-22T14:22:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/26293367275
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-23T03:31:48Z
- price_usd: 2.0444369516451206
- top10_holder_pct: 89.1523
- scenario_probabilities: Bull 0.439, Base 0.4871, Stress 0.0739
- Probability drift: Bull -0.0930, Base +0.0877, Stress +0.0053

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
