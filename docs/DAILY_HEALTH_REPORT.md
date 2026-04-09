# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-09 22:46
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-09T13:06:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/24191810801
- Most recent run #2: success (schedule) · 2026-04-09T07:20:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/24177817935
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-09T13:06:50Z
- price_usd: 2.979706818516136
- top10_holder_pct: 88.1329
- scenario_probabilities: Bull 0.4506, Base 0.4847, Stress 0.0647
- Probability drift: Bull +0.0131, Base -0.0027, Stress -0.0104

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
