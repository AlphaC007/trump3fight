# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-06 23:16
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-06T13:49:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/25439411749
- Most recent run #2: success (schedule) · 2026-05-06T08:24:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/25424466988
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-06T13:50:03Z
- price_usd: 2.360604335237553
- top10_holder_pct: 89.1375
- scenario_probabilities: Bull 0.457, Base 0.4833, Stress 0.0597
- Probability drift: Bull -0.0012, Base +0.0003, Stress +0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
