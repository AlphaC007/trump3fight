# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-05 21:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-05T12:40:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/24001715853
- Most recent run #2: success (schedule) · 2026-04-05T07:04:26Z · https://github.com/AlphaC007/trump3fight/actions/runs/23996494972
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-05T12:40:42Z
- price_usd: 2.8361587608831833
- top10_holder_pct: 88.1431
- scenario_probabilities: Bull 0.4277, Base 0.4891, Stress 0.0832
- Probability drift: Bull +0.0039, Base +0.0013, Stress -0.0052

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
