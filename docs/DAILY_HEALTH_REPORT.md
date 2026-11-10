# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-11 04:02
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-10T19:07:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/42882178140
- Most recent run #2: success (schedule) · 2026-11-10T14:21:12Z · https://github.com/AlphaC007/trump3fight/actions/runs/42833207232
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-10T19:08:09Z
- price_usd: 1.1332334602145644
- top10_holder_pct: 88.4321
- scenario_probabilities: Bull 0.4016, Base 0.4967, Stress 0.1017
- Probability drift: Bull +0.0005, Base +0.0000, Stress -0.0005

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
