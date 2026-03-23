# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-23 13:55
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-23T05:48:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/23423373461
- Most recent run #2: success (schedule) · 2026-03-22T13:54:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/23404537015
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-23T05:48:11Z
- price_usd: 3.199765476721163
- top10_holder_pct: 88.708
- scenario_probabilities: Bull 0.4735, Base 0.4432, Stress 0.0833
- Probability drift: Bull +0.0945, Base +0.0315, Stress -0.1260

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
