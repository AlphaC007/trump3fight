# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-24 21:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: failure (schedule) · 2026-08-24T12:32:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/32727646784
- Most recent run #2: success (schedule) · 2026-08-24T06:53:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/32699167936
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-24T06:53:43Z
- price_usd: 2.4955530224159097
- top10_holder_pct: 88.7017
- scenario_probabilities: Bull 0.4427, Base 0.4863, Stress 0.071
- Probability drift: Bull +0.0029, Base -0.0007, Stress -0.0022

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
