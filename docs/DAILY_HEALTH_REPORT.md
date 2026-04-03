# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-03 21:53
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-03T12:44:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/23946618605
- Most recent run #2: success (schedule) · 2026-04-03T07:06:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/23937600478
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-03T12:44:52Z
- price_usd: 2.8581981331675377
- top10_holder_pct: 88.2797
- scenario_probabilities: Bull 0.4429, Base 0.4862, Stress 0.0709
- Probability drift: Bull -0.0029, Base +0.0006, Stress +0.0023

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
