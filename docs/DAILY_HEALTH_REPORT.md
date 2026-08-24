# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-24 10:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-24T01:23:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/32679645567
- Most recent run #2: success (schedule) · 2026-08-23T12:23:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/32639243428
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-24T01:24:00Z
- price_usd: 2.5697526342535424
- top10_holder_pct: 88.7337
- scenario_probabilities: Bull 0.4398, Base 0.487, Stress 0.0732
- Probability drift: Bull -0.0061, Base +0.0014, Stress +0.0047

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
