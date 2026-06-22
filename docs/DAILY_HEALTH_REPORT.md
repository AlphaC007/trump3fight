# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-23 01:20
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-22T16:41:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/27968672359
- Most recent run #2: success (schedule) · 2026-06-22T11:50:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/27950521446
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-22T16:41:27Z
- price_usd: 1.9167377538731145
- top10_holder_pct: 88.9492
- scenario_probabilities: Bull 0.4372, Base 0.4875, Stress 0.0753
- Probability drift: Bull -0.0081, Base +0.0018, Stress +0.0063

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
