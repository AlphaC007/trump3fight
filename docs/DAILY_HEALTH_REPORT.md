# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-17 10:14
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-17T01:21:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/31984733433
- Most recent run #2: success (schedule) · 2026-08-16T12:22:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/31946883184
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-17T01:22:03Z
- price_usd: 1.4027702319727715
- top10_holder_pct: 87.9217
- scenario_probabilities: Bull 0.4291, Base 0.4892, Stress 0.0817
- Probability drift: Bull +0.0232, Base +0.0073, Stress -0.0305

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
