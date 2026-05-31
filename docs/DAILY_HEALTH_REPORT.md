# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-31 13:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-31T04:05:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/26702810972
- Most recent run #2: success (schedule) · 2026-05-30T13:10:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/26684656359
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-31T04:05:38Z
- price_usd: 2.0065729011775586
- top10_holder_pct: 89.0413
- scenario_probabilities: Bull 0.4377, Base 0.4874, Stress 0.0749
- Probability drift: Bull +0.1093, Base +0.0271, Stress -0.1364

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
