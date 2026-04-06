# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-06 11:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-06T02:46:44Z · https://github.com/AlphaC007/trump3fight/actions/runs/24016634310
- Most recent run #2: success (schedule) · 2026-04-05T12:40:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/24001715853
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-06T02:46:50Z
- price_usd: 2.896090825652142
- top10_holder_pct: 88.1358
- scenario_probabilities: Bull 0.4264, Base 0.4886, Stress 0.085
- Probability drift: Bull -0.0013, Base -0.0005, Stress +0.0018

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
