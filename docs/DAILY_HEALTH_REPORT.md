# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-29 11:51
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-29T02:42:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/23699760309
- Most recent run #2: success (schedule) · 2026-03-28T12:37:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/23685387955
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-29T02:42:56Z
- price_usd: 2.940239648814407
- top10_holder_pct: 88.4355
- scenario_probabilities: Bull 0.4401, Base 0.4869, Stress 0.073
- Probability drift: Bull -0.0092, Base +0.0020, Stress +0.0072

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
