# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-12 00:46
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-11T15:38:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/34617286354
- Most recent run #2: success (schedule) · 2026-09-11T10:37:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/34590138569
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-11T15:38:13Z
- price_usd: 2.0343723834441194
- top10_holder_pct: 88.3954
- scenario_probabilities: Bull 0.4607, Base 0.4825, Stress 0.0568
- Probability drift: Bull +0.0083, Base -0.0018, Stress -0.0065

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
