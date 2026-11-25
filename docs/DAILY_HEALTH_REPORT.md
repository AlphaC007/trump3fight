# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-25 17:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-25T07:33:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/45569069327
- Most recent run #2: success (schedule) · 2026-11-24T21:47:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/45494558983
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-25T07:33:34Z
- price_usd: 0.8394539880263978
- top10_holder_pct: 88.3463
- scenario_probabilities: Bull 0.4125, Base 0.4944, Stress 0.0931
- Probability drift: Bull -0.0667, Base +0.0750, Stress -0.0083

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
