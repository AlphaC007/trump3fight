# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-29 15:33
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-29T06:11:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/33237890017
- Most recent run #2: success (schedule) · 2026-08-28T21:36:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/33213321613
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-29T06:11:56Z
- price_usd: 2.7480045870706236
- top10_holder_pct: 89.6013
- scenario_probabilities: Bull 0.4439, Base 0.4861, Stress 0.07
- Probability drift: Bull -0.0039, Base +0.0008, Stress +0.0031

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
