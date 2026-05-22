# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-22 12:55
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-22T03:55:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/26267515958
- Most recent run #2: success (schedule) · 2026-05-21T14:48:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/26233482084
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-22T03:55:15Z
- price_usd: 2.088492183946871
- top10_holder_pct: 89.152
- scenario_probabilities: Bull 0.5248, Base 0.4064, Stress 0.0688
- Probability drift: Bull +0.1000, Base -0.0817, Stress -0.0183

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
