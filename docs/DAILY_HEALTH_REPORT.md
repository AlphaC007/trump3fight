# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-14 13:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-14T04:19:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/27488122452
- Most recent run #2: success (schedule) · 2026-06-13T13:43:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/27468456217
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-14T04:20:05Z
- price_usd: 2.124423264451047
- top10_holder_pct: 89.2575
- scenario_probabilities: Bull 0.4554, Base 0.4836, Stress 0.061
- Probability drift: Bull -0.0703, Base +0.0780, Stress -0.0077

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
