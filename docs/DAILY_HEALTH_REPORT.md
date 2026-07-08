# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-08 23:03
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-08T13:45:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/28947521185
- Most recent run #2: success (schedule) · 2026-07-08T08:25:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/28928547607
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-08T13:46:17Z
- price_usd: 1.6127226355326565
- top10_holder_pct: 88.8943
- scenario_probabilities: Bull 0.4379, Base 0.4873, Stress 0.0748
- Probability drift: Bull -0.0181, Base +0.0037, Stress +0.0144

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
