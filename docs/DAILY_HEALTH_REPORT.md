# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-04 12:36
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-04T03:29:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/25299583770
- Most recent run #2: success (schedule) · 2026-05-03T12:53:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/25279712959
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-04T03:29:58Z
- price_usd: 2.366619419156069
- top10_holder_pct: 88.9554
- scenario_probabilities: Bull 0.5268, Base 0.4045, Stress 0.0687
- Probability drift: Bull -0.0005, Base +0.0005, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
