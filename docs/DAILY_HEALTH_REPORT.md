# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-04 12:28
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-04T03:22:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/28693408086
- Most recent run #2: success (schedule) · 2026-07-03T13:46:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/28664648281
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-04T03:22:58Z
- price_usd: 1.7820372810759273
- top10_holder_pct: 88.5394
- scenario_probabilities: Bull 0.437, Base 0.4875, Stress 0.0755
- Probability drift: Bull +0.0020, Base -0.0005, Stress -0.0015

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
