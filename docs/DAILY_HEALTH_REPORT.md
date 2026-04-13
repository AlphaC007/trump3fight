# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-13 22:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-13T13:08:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/24345079309
- Most recent run #2: success (schedule) · 2026-04-13T08:01:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/24332421043
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-13T13:08:22Z
- price_usd: 2.8100337374716737
- top10_holder_pct: 88.1823
- scenario_probabilities: Bull 0.4604, Base 0.4826, Stress 0.057
- Probability drift: Bull +0.0064, Base -0.0013, Stress -0.0051

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
