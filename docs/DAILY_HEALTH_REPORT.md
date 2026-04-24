# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-24 22:25
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-24T13:05:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/24891042660
- Most recent run #2: success (schedule) · 2026-04-24T08:01:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/24878972578
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-24T13:05:49Z
- price_usd: 2.8790003044945833
- top10_holder_pct: 89.0144
- scenario_probabilities: Bull 0.524, Base 0.4072, Stress 0.0688
- Probability drift: Bull -0.0014, Base +0.0013, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
