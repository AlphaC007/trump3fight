# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-05 22:21
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-05T13:14:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/28742011122
- Most recent run #2: success (schedule) · 2026-07-05T08:50:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/28735310953
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-05T13:15:03Z
- price_usd: 1.7123303591260677
- top10_holder_pct: 88.6401
- scenario_probabilities: Bull 0.4462, Base 0.4856, Stress 0.0682
- Probability drift: Bull -0.0035, Base +0.0008, Stress +0.0027

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
