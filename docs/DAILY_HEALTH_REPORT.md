# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-07 22:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-07T13:04:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/24082846660
- Most recent run #2: success (schedule) · 2026-04-07T07:14:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/24069263936
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-07T13:04:43Z
- price_usd: 2.802076302895184
- top10_holder_pct: 88.0691
- scenario_probabilities: Bull 0.447, Base 0.4854, Stress 0.0676
- Probability drift: Bull +0.0133, Base -0.0028, Stress -0.0105

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
