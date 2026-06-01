# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-01 13:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-01T04:20:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/26734943842
- Most recent run #2: success (schedule) · 2026-05-31T13:21:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/26713767872
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-01T04:20:17Z
- price_usd: 2.0258769429016175
- top10_holder_pct: 89.0567
- scenario_probabilities: Bull 0.4458, Base 0.4857, Stress 0.0685
- Probability drift: Bull -0.0081, Base +0.0017, Stress +0.0064

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
