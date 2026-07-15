# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-15 22:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-15T13:19:25Z · https://github.com/AlphaC007/trump3fight/actions/runs/29418699361
- Most recent run #2: success (schedule) · 2026-07-15T08:06:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/29399595548
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-15T13:19:32Z
- price_usd: 1.5776700132338475
- top10_holder_pct: 88.9485
- scenario_probabilities: Bull 0.4466, Base 0.4855, Stress 0.0679
- Probability drift: Bull +0.0148, Base -0.0031, Stress -0.0117

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
