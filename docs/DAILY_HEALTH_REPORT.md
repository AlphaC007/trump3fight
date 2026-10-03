# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-04 00:48
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-03T15:30:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/37133493330
- Most recent run #2: success (schedule) · 2026-10-03T11:07:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/37118631594
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-03T15:30:46Z
- price_usd: 2.057647508012876
- top10_holder_pct: 88.4173
- scenario_probabilities: Bull 0.488, Base 0.4109, Stress 0.1011
- Probability drift: Bull +0.0031, Base -0.0030, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
