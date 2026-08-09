# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-09 21:38
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-09T12:34:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/31313607855
- Most recent run #2: success (schedule) · 2026-08-09T06:53:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/31299871032
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-09T12:34:10Z
- price_usd: 1.478498792221357
- top10_holder_pct: 87.909
- scenario_probabilities: Bull 0.4439, Base 0.4861, Stress 0.07
- Probability drift: Bull -0.0071, Base +0.0015, Stress +0.0056

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
