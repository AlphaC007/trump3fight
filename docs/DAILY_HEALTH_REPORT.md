# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-11 11:32
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-11T02:31:58Z · https://github.com/AlphaC007/trump3fight/actions/runs/24272654893
- Most recent run #2: success (schedule) · 2026-04-10T12:54:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/24243924123
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-11T02:32:04Z
- price_usd: 2.8359161062772924
- top10_holder_pct: 88.1728
- scenario_probabilities: Bull 0.4625, Base 0.4821, Stress 0.0554
- Probability drift: Bull +0.0175, Base -0.0037, Stress -0.0138

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
