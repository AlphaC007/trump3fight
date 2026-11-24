# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-24 18:34
- Executive Summary: Core pipeline available; current risk assessment is [Under Pressure].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-24T08:56:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/45360528851
- Most recent run #2: success (schedule) · 2026-11-23T23:09:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/45286291825
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-24T08:56:46Z
- price_usd: 0.8615916480080628
- top10_holder_pct: 88.343
- scenario_probabilities: Bull 0.2852, Base 0.4704, Stress 0.2444
- Probability drift: Bull +0.0009, Base +0.0017, Stress -0.0026

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Under Pressure]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
