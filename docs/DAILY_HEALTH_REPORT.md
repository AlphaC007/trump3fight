# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-15 23:08
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-15T13:48:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/25921368488
- Most recent run #2: success (schedule) · 2026-05-15T08:46:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/25908904098
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-15T13:48:44Z
- price_usd: 2.258575958462595
- top10_holder_pct: 89.0678
- scenario_probabilities: Bull 0.5348, Base 0.3967, Stress 0.0685
- Probability drift: Bull -0.0062, Base +0.0060, Stress +0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
