# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-18 16:05
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-18T06:27:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/44251477842
- Most recent run #2: success (schedule) · 2026-11-17T20:17:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/44167730832
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-18T06:27:45Z
- price_usd: 0.9670962915389233
- top10_holder_pct: 88.3704
- scenario_probabilities: Bull 0.3994, Base 0.4971, Stress 0.1035
- Probability drift: Bull +0.0032, Base -0.0007, Stress -0.0025

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
