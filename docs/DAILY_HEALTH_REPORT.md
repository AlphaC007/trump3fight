# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-14 11:51
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-14T02:40:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/29301650652
- Most recent run #2: success (schedule) · 2026-07-13T14:13:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/29257003579
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-14T02:40:48Z
- price_usd: 1.5345183524733876
- top10_holder_pct: 88.9014
- scenario_probabilities: Bull 0.4483, Base 0.4851, Stress 0.0666
- Probability drift: Bull +0.0041, Base -0.0009, Stress -0.0032

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
