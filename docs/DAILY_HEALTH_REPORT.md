# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-13 00:00
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-12T14:40:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/27422791198
- Most recent run #2: success (schedule) · 2026-06-12T10:10:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/27409207719
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-12T14:40:56Z
- price_usd: 1.9906072876779273
- top10_holder_pct: 89.2969
- scenario_probabilities: Bull 0.4367, Base 0.4889, Stress 0.0744
- Probability drift: Bull +0.0000, Base +0.0000, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
