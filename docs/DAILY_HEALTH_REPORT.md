# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-20 13:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-20T03:59:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/35487968576
- Most recent run #2: success (schedule) · 2026-09-19T15:07:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/35450807855
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-20T03:59:20Z
- price_usd: 2.030872949940172
- top10_holder_pct: 88.0907
- scenario_probabilities: Bull 0.4328, Base 0.4884, Stress 0.0788
- Probability drift: Bull +0.0372, Base -0.0095, Stress -0.0277

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
