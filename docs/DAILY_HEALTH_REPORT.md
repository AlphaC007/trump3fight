# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-21 22:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-21T13:21:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/29834037843
- Most recent run #2: success (schedule) · 2026-07-21T08:24:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/29814191390
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-21T13:21:17Z
- price_usd: 1.596764982003156
- top10_holder_pct: 88.9749
- scenario_probabilities: Bull 0.4333, Base 0.4883, Stress 0.0784
- Probability drift: Bull -0.0021, Base +0.0005, Stress +0.0016

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
