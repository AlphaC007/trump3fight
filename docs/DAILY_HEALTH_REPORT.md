# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-30 12:28
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-30T03:29:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/25145841022
- Most recent run #2: success (schedule) · 2026-04-29T13:28:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/25111709600
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-30T03:29:33Z
- price_usd: 2.378311806747916
- top10_holder_pct: 88.971
- scenario_probabilities: Bull 0.5242, Base 0.407, Stress 0.0688
- Probability drift: Bull -0.0001, Base +0.0001, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
