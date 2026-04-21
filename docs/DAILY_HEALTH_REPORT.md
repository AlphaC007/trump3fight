# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-21 22:26
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-21T13:07:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/24724066842
- Most recent run #2: success (schedule) · 2026-04-21T07:48:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/24710585859
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-21T13:07:18Z
- price_usd: 2.862950337705271
- top10_holder_pct: 88.757
- scenario_probabilities: Bull 0.4466, Base 0.4855, Stress 0.0679
- Probability drift: Bull +0.0035, Base -0.0007, Stress -0.0028

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
