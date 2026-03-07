# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-07 12:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-07T04:46:44Z · https://github.com/AlphaC007/trump3fight/actions/runs/22792299023
- Most recent run #2: success (schedule) · 2026-03-06T14:05:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/22766829754
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-07T04:46:57Z
- price_usd: 3.125725473582569
- top10_holder_pct: 89.7368
- scenario_probabilities: Bull 0.5111, Base 0.4335, Stress 0.0554
- Probability drift: Bull +0.0023, Base +0.0008, Stress -0.0031

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
