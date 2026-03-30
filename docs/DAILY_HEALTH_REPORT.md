# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-30 11:55
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-30T02:45:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/23725698107
- Most recent run #2: success (schedule) · 2026-03-29T12:38:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/23709224990
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-30T02:45:41Z
- price_usd: 2.958618008230714
- top10_holder_pct: 87.9866
- scenario_probabilities: Bull 0.5225, Base 0.4087, Stress 0.0688
- Probability drift: Bull +0.0886, Base -0.0795, Stress -0.0091

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
