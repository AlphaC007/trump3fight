# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-30 22:55
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-30T13:26:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/25168000944
- Most recent run #2: success (schedule) · 2026-04-30T08:20:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/25155105119
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-30T13:26:17Z
- price_usd: 2.373416039618898
- top10_holder_pct: 88.9387
- scenario_probabilities: Bull 0.5252, Base 0.4061, Stress 0.0687
- Probability drift: Bull +0.0003, Base -0.0002, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
