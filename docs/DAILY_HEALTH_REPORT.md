# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-30 22:16
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-30T13:01:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/23746051698
- Most recent run #2: success (schedule) · 2026-03-30T07:25:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/23732957001
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-30T13:02:02Z
- price_usd: 2.985879714525305
- top10_holder_pct: 88.1712
- scenario_probabilities: Bull 0.4569, Base 0.4833, Stress 0.0598
- Probability drift: Bull -0.0011, Base +0.0002, Stress +0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
