# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-28 13:11
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-28T04:04:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/28310809302
- Most recent run #2: success (schedule) · 2026-06-27T13:16:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/28290337416
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-28T04:04:07Z
- price_usd: 1.6589060120885364
- top10_holder_pct: 88.3733
- scenario_probabilities: Bull 0.4283, Base 0.4892, Stress 0.0825
- Probability drift: Bull -0.0260, Base +0.0053, Stress +0.0207

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
