# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-09 15:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-09T05:13:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/42566005298
- Most recent run #2: success (schedule) · 2026-11-08T17:26:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/42504985692
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-09T05:13:15Z
- price_usd: 1.1467833373359204
- top10_holder_pct: 88.4959
- scenario_probabilities: Bull 0.4072, Base 0.4955, Stress 0.0973
- Probability drift: Bull +0.0093, Base -0.0019, Stress -0.0074

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
