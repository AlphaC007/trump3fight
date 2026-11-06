# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-06 15:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-06T05:39:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/42169664314
- Most recent run #2: success (schedule) · 2026-11-05T19:16:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/42092365843
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-06T05:39:07Z
- price_usd: 1.227511784711316
- top10_holder_pct: 88.46
- scenario_probabilities: Bull 0.4195, Base 0.5017, Stress 0.0788
- Probability drift: Bull +0.0170, Base +0.0052, Stress -0.0222

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
