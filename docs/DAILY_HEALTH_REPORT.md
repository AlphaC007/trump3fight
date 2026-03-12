# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-13 00:37
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-12T14:36:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/23007353776
- Most recent run #2: success (schedule) · 2026-03-12T07:59:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/22992102020
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-12T14:36:47Z
- price_usd: 2.7428031329906717
- top10_holder_pct: 89.2272
- scenario_probabilities: Bull 0.5367, Base 0.4302, Stress 0.0331
- Probability drift: Bull -0.1244, Base +0.1217, Stress +0.0027

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
