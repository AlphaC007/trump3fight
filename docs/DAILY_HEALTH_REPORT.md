# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-16 10:16
- Executive Summary: Core pipeline available; current risk assessment is [Under Pressure].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-16T01:24:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/31919507398
- Most recent run #2: success (schedule) · 2026-08-15T12:21:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/31884380857
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-16T01:24:56Z
- price_usd: 1.4026050032247945
- top10_holder_pct: 87.9249
- scenario_probabilities: Bull 0.3272, Base 0.4579, Stress 0.2149
- Probability drift: Bull -0.1017, Base -0.0313, Stress +0.1330

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Under Pressure]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
