# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-18 11:48
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-18T02:40:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/29627453748
- Most recent run #2: success (schedule) · 2026-07-17T13:11:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/29582986063
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-18T02:40:29Z
- price_usd: 1.6163726791826492
- top10_holder_pct: 88.9996
- scenario_probabilities: Bull 0.4585, Base 0.483, Stress 0.0585
- Probability drift: Bull -0.0706, Base +0.0807, Stress -0.0101

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
