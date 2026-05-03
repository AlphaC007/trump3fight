# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-03 22:02
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-03T12:53:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/25279712959
- Most recent run #2: success (schedule) · 2026-05-03T07:59:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/25273722987
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-03T12:53:22Z
- price_usd: 2.328928342413856
- top10_holder_pct: 88.9318
- scenario_probabilities: Bull 0.5273, Base 0.404, Stress 0.0687
- Probability drift: Bull -0.0026, Base +0.0025, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
