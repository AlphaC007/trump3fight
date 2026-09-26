# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-27 00:47
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-26T15:28:26Z · https://github.com/AlphaC007/trump3fight/actions/runs/36252054072
- Most recent run #2: success (schedule) · 2026-09-26T10:49:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/36236964988
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-26T15:28:32Z
- price_usd: 2.167263331643421
- top10_holder_pct: 88.4729
- scenario_probabilities: Bull 0.3949, Base 0.498, Stress 0.1071
- Probability drift: Bull -0.0085, Base +0.0017, Stress +0.0068

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
