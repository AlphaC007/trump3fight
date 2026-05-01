# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-01 12:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-01T03:38:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/25201082033
- Most recent run #2: success (schedule) · 2026-04-30T13:26:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/25168000944
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-01T03:38:45Z
- price_usd: 2.4018208401655574
- top10_holder_pct: 88.8236
- scenario_probabilities: Bull 0.5258, Base 0.4055, Stress 0.0687
- Probability drift: Bull +0.0006, Base -0.0006, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
