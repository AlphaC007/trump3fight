# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-26 10:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-26T01:24:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/32918841879
- Most recent run #2: success (schedule) · 2026-08-25T12:32:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/32848117263
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-26T01:24:22Z
- price_usd: 2.213850525578965
- top10_holder_pct: 89.3033
- scenario_probabilities: Bull 0.4588, Base 0.483, Stress 0.0582
- Probability drift: Bull +0.0060, Base -0.0012, Stress -0.0048

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
