# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-01 22:17
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-01T13:01:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/30700890365
- Most recent run #2: success (schedule) · 2026-08-01T08:17:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/30691459089
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-01T13:01:58Z
- price_usd: 1.4251794163652338
- top10_holder_pct: 87.9434
- scenario_probabilities: Bull 0.442, Base 0.4865, Stress 0.0715
- Probability drift: Bull +0.0026, Base -0.0005, Stress -0.0021

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
