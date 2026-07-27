# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-27 12:31
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-27T03:23:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/30234478586
- Most recent run #2: success (schedule) · 2026-07-26T13:03:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/30203279020
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-27T03:23:19Z
- price_usd: 1.5914097841587684
- top10_holder_pct: 88.184
- scenario_probabilities: Bull 0.4269, Base 0.4888, Stress 0.0843
- Probability drift: Bull +0.0016, Base +0.0005, Stress -0.0021

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
