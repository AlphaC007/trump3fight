# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-27 22:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-27T13:16:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/28290337416
- Most recent run #2: success (schedule) · 2026-06-27T08:33:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/28283996418
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-27T13:16:56Z
- price_usd: 1.6970814499610059
- top10_holder_pct: 88.745
- scenario_probabilities: Bull 0.4543, Base 0.4839, Stress 0.0618
- Probability drift: Bull +0.0000, Base +0.0000, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
