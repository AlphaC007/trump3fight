# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-23 22:56
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-23T13:29:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/30011406880
- Most recent run #2: success (schedule) · 2026-07-23T08:26:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/29991192800
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-23T13:29:20Z
- price_usd: 1.6290626011665743
- top10_holder_pct: 88.9881
- scenario_probabilities: Bull 0.4356, Base 0.4878, Stress 0.0766
- Probability drift: Bull -0.0052, Base +0.0011, Stress +0.0041

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
