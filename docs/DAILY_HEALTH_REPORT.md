# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-22 03:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-21T18:30:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/44935916878
- Most recent run #2: success (schedule) · 2026-11-21T14:14:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/44912891857
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-21T18:30:44Z
- price_usd: 0.8869276196331536
- top10_holder_pct: 88.3527
- scenario_probabilities: Bull 0.4074, Base 0.4954, Stress 0.0972
- Probability drift: Bull +0.0073, Base -0.0016, Stress -0.0057

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
