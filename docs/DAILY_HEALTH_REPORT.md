# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-21 00:31
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-20T15:11:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/35518793719
- Most recent run #2: success (schedule) · 2026-09-20T10:39:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/35505671420
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-20T15:11:36Z
- price_usd: 2.020832333731245
- top10_holder_pct: 87.8965
- scenario_probabilities: Bull 0.4354, Base 0.4879, Stress 0.0767
- Probability drift: Bull +0.0052, Base -0.0011, Stress -0.0041

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
