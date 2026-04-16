# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-16 22:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-16T13:15:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/24512355050
- Most recent run #2: success (schedule) · 2026-04-16T07:44:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/24498397971
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-16T13:15:56Z
- price_usd: 2.9680579525015287
- top10_holder_pct: 88.541
- scenario_probabilities: Bull 0.523, Base 0.4082, Stress 0.0688
- Probability drift: Bull +0.0621, Base -0.0743, Stress +0.0122

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
