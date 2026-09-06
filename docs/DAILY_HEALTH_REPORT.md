# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-06 13:20
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-06T03:32:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/34009241490
- Most recent run #2: success (schedule) · 2026-09-05T14:19:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/33971489112
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-06T03:32:24Z
- price_usd: 2.3825005148347156
- top10_holder_pct: 88.9297
- scenario_probabilities: Bull 0.4633, Base 0.482, Stress 0.0547
- Probability drift: Bull +0.0260, Base -0.0054, Stress -0.0206

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
