# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-31 14:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-31T04:38:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/41169385993
- Most recent run #2: success (schedule) · 2026-10-30T17:32:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/41099728837
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-31T04:38:26Z
- price_usd: 1.586911999007278
- top10_holder_pct: 88.6318
- scenario_probabilities: Bull 0.4147, Base 0.4939, Stress 0.0914
- Probability drift: Bull -0.0019, Base +0.0003, Stress +0.0016

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
