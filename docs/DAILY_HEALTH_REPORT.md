# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-24 22:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-24T13:21:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/30096555106
- Most recent run #2: success (schedule) · 2026-07-24T08:24:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/30078799277
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-24T13:21:35Z
- price_usd: 1.5696563876896865
- top10_holder_pct: 88.9372
- scenario_probabilities: Bull 0.4445, Base 0.486, Stress 0.0695
- Probability drift: Bull +0.0082, Base -0.0017, Stress -0.0065

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
