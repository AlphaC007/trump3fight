# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-17 11:59
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-17T02:49:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/24545151436
- Most recent run #2: success (schedule) · 2026-04-16T13:15:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/24512355050
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-17T02:49:20Z
- price_usd: 3.0344489373568244
- top10_holder_pct: 88.6992
- scenario_probabilities: Bull 0.4576, Base 0.4832, Stress 0.0592
- Probability drift: Bull -0.0654, Base +0.0750, Stress -0.0096

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
