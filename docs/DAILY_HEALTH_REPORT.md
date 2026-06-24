# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-24 23:27
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-24T14:11:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/28104763826
- Most recent run #2: success (schedule) · 2026-06-24T09:26:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/28088757783
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-24T14:11:14Z
- price_usd: 1.7138582312046788
- top10_holder_pct: 88.954
- scenario_probabilities: Bull 0.4434, Base 0.4861, Stress 0.0705
- Probability drift: Bull -0.0001, Base -0.0001, Stress +0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
