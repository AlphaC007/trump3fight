# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-14 03:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-13T18:43:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/38449004595
- Most recent run #2: success (schedule) · 2026-10-13T13:35:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/38406200026
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-13T18:43:09Z
- price_usd: 1.907810922500891
- top10_holder_pct: 88.4533
- scenario_probabilities: Bull 0.4155, Base 0.4937, Stress 0.0908
- Probability drift: Bull -0.0002, Base +0.0000, Stress +0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
