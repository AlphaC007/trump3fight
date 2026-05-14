# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-14 23:11
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-14T13:51:25Z · https://github.com/AlphaC007/trump3fight/actions/runs/25863856764
- Most recent run #2: success (schedule) · 2026-05-14T08:35:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/25850395647
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-14T13:51:33Z
- price_usd: 2.3729792582740976
- top10_holder_pct: 89.057
- scenario_probabilities: Bull 0.5235, Base 0.4077, Stress 0.0688
- Probability drift: Bull +0.0679, Base -0.0759, Stress +0.0080

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
