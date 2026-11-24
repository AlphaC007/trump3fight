# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-24 08:25
- Executive Summary: Core pipeline available; current risk assessment is [Under Pressure].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-23T23:09:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/45286291825
- Most recent run #2: success (schedule) · 2026-11-23T17:25:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/45227529551
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-23T23:09:28Z
- price_usd: 0.8748452347269221
- top10_holder_pct: 88.32
- scenario_probabilities: Bull 0.2843, Base 0.4687, Stress 0.247
- Probability drift: Bull -0.1346, Base -0.0244, Stress +0.1590

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Under Pressure]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
