# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-13 12:16
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-13T02:55:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/24323505918
- Most recent run #2: success (schedule) · 2026-04-12T12:43:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/24307037714
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-13T02:55:58Z
- price_usd: 2.7883273474652968
- top10_holder_pct: 88.1703
- scenario_probabilities: Bull 0.454, Base 0.484, Stress 0.062
- Probability drift: Bull -0.0015, Base +0.0004, Stress +0.0011

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
