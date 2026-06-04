# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-04 13:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-04T04:17:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/26930341134
- Most recent run #2: success (schedule) · 2026-06-03T16:21:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/26898087182
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-04T04:17:53Z
- price_usd: 1.8954694416917246
- top10_holder_pct: 89.091
- scenario_probabilities: Bull 0.4486, Base 0.4851, Stress 0.0663
- Probability drift: Bull -0.0011, Base +0.0002, Stress +0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
