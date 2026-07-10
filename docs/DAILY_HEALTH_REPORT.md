# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-10 23:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-10T14:04:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/29098446116
- Most recent run #2: success (schedule) · 2026-07-10T09:31:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/29083351655
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-10T14:04:50Z
- price_usd: 1.6227680383485605
- top10_holder_pct: 88.9125
- scenario_probabilities: Bull 0.4372, Base 0.4875, Stress 0.0753
- Probability drift: Bull -0.0018, Base +0.0004, Stress +0.0014

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
