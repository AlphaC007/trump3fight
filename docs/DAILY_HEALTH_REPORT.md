# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-27 22:01
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-27T12:46:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/23646875411
- Most recent run #2: success (schedule) · 2026-03-27T07:05:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/23635258438
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-27T12:46:44Z
- price_usd: 3.0017429300175125
- top10_holder_pct: 88.4871
- scenario_probabilities: Bull 0.442, Base 0.4864, Stress 0.0716
- Probability drift: Bull -0.0157, Base +0.0032, Stress +0.0125

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
