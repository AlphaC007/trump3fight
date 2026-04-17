# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-17 22:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-17T13:02:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/24566469992
- Most recent run #2: success (schedule) · 2026-04-17T07:44:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/24553962983
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-17T13:02:46Z
- price_usd: 3.035922190165333
- top10_holder_pct: 88.7473
- scenario_probabilities: Bull 0.4522, Base 0.4843, Stress 0.0635
- Probability drift: Bull -0.0001, Base +0.0000, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
