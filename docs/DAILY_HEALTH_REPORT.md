# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-12 12:31
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-12T03:31:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/25711622302
- Most recent run #2: success (schedule) · 2026-05-11T14:32:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/25676618587
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-12T03:31:58Z
- price_usd: 2.402030062352626
- top10_holder_pct: 89.2896
- scenario_probabilities: Bull 0.4454, Base 0.4858, Stress 0.0688
- Probability drift: Bull +0.0034, Base -0.0007, Stress -0.0027

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
