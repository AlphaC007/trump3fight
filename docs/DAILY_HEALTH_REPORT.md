# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-20 15:55
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-20T06:15:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/44686540179
- Most recent run #2: success (schedule) · 2026-11-19T19:48:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/44602107912
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-20T06:15:45Z
- price_usd: 0.9266863004149627
- top10_holder_pct: 88.4052
- scenario_probabilities: Bull 0.4101, Base 0.4949, Stress 0.095
- Probability drift: Bull +0.0011, Base -0.0002, Stress -0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
