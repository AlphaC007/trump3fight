# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-13 23:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-13T14:28:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/23055466275
- Most recent run #2: success (schedule) · 2026-03-13T07:58:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/23041641109
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-13T14:28:58Z
- price_usd: 4.229166761946477
- top10_holder_pct: 88.9671
- scenario_probabilities: Bull 0.6271, Base 0.3118, Stress 0.0611
- Probability drift: Bull -0.0107, Base -0.0097, Stress +0.0204

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
