# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-31 23:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-31T13:46:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/30635786043
- Most recent run #2: success (schedule) · 2026-07-31T08:46:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/30617487394
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-31T13:46:15Z
- price_usd: 1.4356996219485687
- top10_holder_pct: 88.0113
- scenario_probabilities: Bull 0.443, Base 0.4863, Stress 0.0707
- Probability drift: Bull -0.0016, Base +0.0004, Stress +0.0012

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
