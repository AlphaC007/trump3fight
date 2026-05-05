# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-05 12:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-05T02:56:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/25355382180
- Most recent run #2: success (schedule) · 2026-05-04T13:27:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/25321715581
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-05T02:56:48Z
- price_usd: 2.325463482373284
- top10_holder_pct: 88.9993
- scenario_probabilities: Bull 0.5246, Base 0.4066, Stress 0.0688
- Probability drift: Bull -0.0026, Base +0.0025, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
