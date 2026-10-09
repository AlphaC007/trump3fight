# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-10 02:32
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-09T17:48:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/37968813640
- Most recent run #2: success (schedule) · 2026-10-09T12:35:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/37931050567
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-09T17:48:11Z
- price_usd: 1.847797678963538
- top10_holder_pct: 88.6062
- scenario_probabilities: Bull 0.4824, Base 0.4163, Stress 0.1013
- Probability drift: Bull +0.0022, Base -0.0021, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
