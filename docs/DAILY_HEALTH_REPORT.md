# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-29 00:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-28T15:33:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/26584758792
- Most recent run #2: success (schedule) · 2026-05-28T09:58:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/26567919659
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-28T15:33:48Z
- price_usd: 1.8480996356945665
- top10_holder_pct: 89.0982
- scenario_probabilities: Bull 0.4108, Base 0.4835, Stress 0.1057
- Probability drift: Bull -0.0113, Base -0.0036, Stress +0.0149

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
