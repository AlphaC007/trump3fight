# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-06 23:00
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-06T14:05:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/22766829754
- Most recent run #2: success (schedule) · 2026-03-06T07:53:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/22754342559
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-06T14:05:20Z
- price_usd: 3.1529817900618746
- top10_holder_pct: 89.7349
- scenario_probabilities: Bull 0.5088, Base 0.4327, Stress 0.0585
- Probability drift: Bull -0.0075, Base -0.0020, Stress +0.0095

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
