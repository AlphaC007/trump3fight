# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-27 18:47
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-27T08:09:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/33052797815
- Most recent run #2: success (schedule) · 2026-08-26T12:35:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/32969397871
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-27T08:09:35Z
- price_usd: 2.297854882779968
- top10_holder_pct: 89.357
- scenario_probabilities: Bull 0.451, Base 0.4846, Stress 0.0644
- Probability drift: Bull -0.0098, Base +0.0021, Stress +0.0077

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
