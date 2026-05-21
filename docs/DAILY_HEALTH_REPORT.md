# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-22 00:08
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-21T14:48:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/26233482084
- Most recent run #2: success (schedule) · 2026-05-21T09:37:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/26218075174
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-21T14:48:24Z
- price_usd: 2.019678262073808
- top10_holder_pct: 89.1322
- scenario_probabilities: Bull 0.4248, Base 0.4881, Stress 0.0871
- Probability drift: Bull -0.0111, Base +0.0004, Stress +0.0107

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
