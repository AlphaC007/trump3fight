# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-12 11:58
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-12T02:51:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/24297166202
- Most recent run #2: success (schedule) · 2026-04-11T12:40:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/24282674730
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-12T02:51:24Z
- price_usd: 2.7876785466224154
- top10_holder_pct: 88.1843
- scenario_probabilities: Bull 0.4548, Base 0.4837, Stress 0.0615
- Probability drift: Bull -0.0707, Base +0.0779, Stress -0.0072

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
