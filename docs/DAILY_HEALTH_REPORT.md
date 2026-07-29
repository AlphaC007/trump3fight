# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-29 11:58
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-29T02:48:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/30417814203
- Most recent run #2: success (schedule) · 2026-07-28T13:46:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/30365041043
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-29T02:48:19Z
- price_usd: 1.4489914157272656
- top10_holder_pct: 87.8399
- scenario_probabilities: Bull 0.4569, Base 0.4833, Stress 0.0598
- Probability drift: Bull +0.0012, Base -0.0003, Stress -0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
