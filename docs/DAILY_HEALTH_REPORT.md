# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-09 03:01
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-08T18:14:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/37822781216
- Most recent run #2: success (schedule) · 2026-10-08T12:49:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/37779702841
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-08T18:14:55Z
- price_usd: 1.771516629800031
- top10_holder_pct: 88.6257
- scenario_probabilities: Bull 0.4844, Base 0.4144, Stress 0.1012
- Probability drift: Bull -0.0069, Base +0.0066, Stress +0.0003

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
