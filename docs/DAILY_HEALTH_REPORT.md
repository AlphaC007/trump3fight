# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-20 22:58
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-20T13:51:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/29748039806
- Most recent run #2: success (schedule) · 2026-07-20T08:54:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/29729468802
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-20T13:51:20Z
- price_usd: 1.5767040183746268
- top10_holder_pct: 88.934
- scenario_probabilities: Bull 0.4453, Base 0.4857, Stress 0.069
- Probability drift: Bull -0.0023, Base +0.0004, Stress +0.0019

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
