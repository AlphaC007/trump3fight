# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-21 12:58
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-21T04:54:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/23372406424
- Most recent run #2: success (schedule) · 2026-03-20T14:31:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/23347506784
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-21T04:54:22Z
- price_usd: 3.369129431138023
- top10_holder_pct: 88.7267
- scenario_probabilities: Bull 0.477, Base 0.4445, Stress 0.0785
- Probability drift: Bull +0.0019, Base +0.0006, Stress -0.0025

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
