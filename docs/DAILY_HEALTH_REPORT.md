# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-17 06:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-16T21:28:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/43960417506
- Most recent run #2: success (schedule) · 2026-11-16T14:49:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/43889846943
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-16T21:28:37Z
- price_usd: 0.9476577775866797
- top10_holder_pct: 88.3738
- scenario_probabilities: Bull 0.4069, Base 0.4956, Stress 0.0975
- Probability drift: Bull -0.0004, Base +0.0002, Stress +0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
