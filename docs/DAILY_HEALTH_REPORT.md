# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-26 00:51
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-25T15:20:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/40206506321
- Most recent run #2: success (schedule) · 2026-10-25T10:44:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/40186040104
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-25T15:21:03Z
- price_usd: 1.6576812237866287
- top10_holder_pct: 88.1699
- scenario_probabilities: Bull 0.4856, Base 0.4132, Stress 0.1012
- Probability drift: Bull +0.0003, Base -0.0003, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
