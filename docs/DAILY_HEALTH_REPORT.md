# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-20 00:11
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-19T14:42:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/26104629103
- Most recent run #2: success (schedule) · 2026-05-19T09:39:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/26089107068
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-19T14:43:07Z
- price_usd: 2.0363154780095845
- top10_holder_pct: 89.0668
- scenario_probabilities: Bull 0.5286, Base 0.4027, Stress 0.0687
- Probability drift: Bull +0.0686, Base -0.0800, Stress +0.0114

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
