# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-12 23:53
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-12T14:44:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/34700181099
- Most recent run #2: success (schedule) · 2026-09-12T10:07:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/34687607389
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-12T14:45:03Z
- price_usd: 1.9998149393870033
- top10_holder_pct: 88.3915
- scenario_probabilities: Bull 0.4458, Base 0.4857, Stress 0.0685
- Probability drift: Bull +0.0022, Base -0.0004, Stress -0.0018

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
