# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-06 12:47
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-06T03:43:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/27051650154
- Most recent run #2: success (schedule) · 2026-06-05T14:31:04Z · https://github.com/AlphaC007/trump3fight/actions/runs/27020952479
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-06T03:43:22Z
- price_usd: 1.582508569845628
- top10_holder_pct: 88.9843
- scenario_probabilities: Bull 0.458, Base 0.4831, Stress 0.0589
- Probability drift: Bull +0.0060, Base -0.0013, Stress -0.0047

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
