# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-03 23:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-03T14:31:25Z · https://github.com/AlphaC007/trump-thesis-lab/actions/runs/22627635792
- Most recent run #2: success (schedule) · 2026-03-03T07:56:57Z · https://github.com/AlphaC007/trump-thesis-lab/actions/runs/22613655472
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-03T15:03:18Z
- price_usd: 3.38
- top10_holder_pct: 91.4985
- scenario_probabilities: Bull 0.398, Base 0.5063, Stress 0.0957
- Probability drift: Bull -0.0135, Base +0.0028, Stress +0.0107

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
