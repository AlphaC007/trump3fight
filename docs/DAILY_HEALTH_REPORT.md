# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-24 13:41
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-24T03:44:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/35952699152
- Most recent run #2: success (schedule) · 2026-09-23T15:52:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/35884732372
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-24T03:44:28Z
- price_usd: 1.9673956862827846
- top10_holder_pct: 88.3336
- scenario_probabilities: Bull 0.4029, Base 0.4964, Stress 0.1007
- Probability drift: Bull +0.0090, Base -0.0019, Stress -0.0071

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
