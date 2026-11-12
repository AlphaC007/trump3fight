# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-12 15:52
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-12T06:17:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/43167154917
- Most recent run #2: success (schedule) · 2026-11-11T19:04:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/43083784303
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-12T06:18:04Z
- price_usd: 1.1174532654518925
- top10_holder_pct: 88.4443
- scenario_probabilities: Bull 0.4035, Base 0.4963, Stress 0.1002
- Probability drift: Bull -0.0057, Base +0.0012, Stress +0.0045

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
