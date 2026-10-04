# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-05 01:06
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-04T16:14:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/37216043393
- Most recent run #2: success (schedule) · 2026-10-04T11:47:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/37199942906
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-04T16:14:47Z
- price_usd: 2.045788908616961
- top10_holder_pct: 88.5815
- scenario_probabilities: Bull 0.4821, Base 0.4166, Stress 0.1013
- Probability drift: Bull +0.0135, Base +0.0406, Stress -0.0541

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
