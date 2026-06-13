# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-13 22:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-13T13:43:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/27468456217
- Most recent run #2: success (schedule) · 2026-06-13T08:56:04Z · https://github.com/AlphaC007/trump3fight/actions/runs/27462229703
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-13T13:43:32Z
- price_usd: 2.2433081654712694
- top10_holder_pct: 89.4024
- scenario_probabilities: Bull 0.5257, Base 0.4056, Stress 0.0687
- Probability drift: Bull +0.0011, Base -0.0010, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
