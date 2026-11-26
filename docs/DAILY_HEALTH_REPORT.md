# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-27 05:59
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-26T20:45:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/45893367469
- Most recent run #2: success (schedule) · 2026-11-26T16:24:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/45858502320
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-26T20:45:50Z
- price_usd: 0.8773666464024751
- top10_holder_pct: 87.9807
- scenario_probabilities: Bull 0.4098, Base 0.4949, Stress 0.0953
- Probability drift: Bull +0.0030, Base -0.0007, Stress -0.0023

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
