# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-11 13:22
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-11T04:12:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/27323292459
- Most recent run #2: success (schedule) · 2026-06-10T14:58:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/27285312497
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-11T04:12:28Z
- price_usd: 1.689675884516368
- top10_holder_pct: 88.997
- scenario_probabilities: Bull 0.4557, Base 0.4836, Stress 0.0607
- Probability drift: Bull -0.0040, Base +0.0008, Stress +0.0032

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
