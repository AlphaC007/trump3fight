# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-28 06:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-27T21:31:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/33118531189
- Most recent run #2: success (schedule) · 2026-08-27T17:19:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/33097843398
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-27T21:31:31Z
- price_usd: 2.550518223525629
- top10_holder_pct: 89.4907
- scenario_probabilities: Bull 0.4452, Base 0.4858, Stress 0.069
- Probability drift: Bull +0.0179, Base -0.0051, Stress -0.0128

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
