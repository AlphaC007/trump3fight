# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-23 13:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-23T03:51:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/35816006632
- Most recent run #2: success (schedule) · 2026-09-22T16:01:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/35751328259
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-23T03:51:50Z
- price_usd: 2.251505414954586
- top10_holder_pct: 88.0497
- scenario_probabilities: Bull 0.3821, Base 0.4989, Stress 0.119
- Probability drift: Bull -0.0099, Base +0.0002, Stress +0.0097

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
