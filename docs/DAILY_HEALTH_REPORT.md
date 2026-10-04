# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-04 14:32
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-04T04:53:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/37178281842
- Most recent run #2: success (schedule) · 2026-10-03T15:30:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/37133493330
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-04T04:53:13Z
- price_usd: 2.041906528712534
- top10_holder_pct: 88.4792
- scenario_probabilities: Bull 0.4938, Base 0.4054, Stress 0.1008
- Probability drift: Bull +0.0058, Base -0.0055, Stress -0.0003

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
