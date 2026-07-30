# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-30 22:56
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-30T13:41:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/30548081405
- Most recent run #2: success (schedule) · 2026-07-30T08:22:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/30526464683
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-30T13:41:34Z
- price_usd: 1.4410114710317803
- top10_holder_pct: 87.8459
- scenario_probabilities: Bull 0.4307, Base 0.4889, Stress 0.0804
- Probability drift: Bull +0.0000, Base +0.0001, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
