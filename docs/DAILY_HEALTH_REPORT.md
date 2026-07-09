# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-09 23:49
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-09T14:38:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/29026176529
- Most recent run #2: success (schedule) · 2026-07-09T09:35:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/29008731320
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-09T14:38:14Z
- price_usd: 1.6079723392664254
- top10_holder_pct: 88.9039
- scenario_probabilities: Bull 0.4413, Base 0.4866, Stress 0.0721
- Probability drift: Bull +0.0100, Base -0.0021, Stress -0.0079

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
