# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-15 13:51
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-15T05:44:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/23104381679
- Most recent run #2: success (schedule) · 2026-03-14T13:56:25Z · https://github.com/AlphaC007/trump3fight/actions/runs/23089343248
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-15T05:44:12Z
- price_usd: 3.915874769702259
- top10_holder_pct: 88.909
- scenario_probabilities: Bull 0.524, Base 0.4329, Stress 0.0431
- Probability drift: Bull -0.0188, Base +0.0042, Stress +0.0146

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
