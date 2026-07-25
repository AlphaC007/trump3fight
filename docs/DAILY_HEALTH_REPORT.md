# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-25 11:57
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-25T02:49:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/30141102046
- Most recent run #2: success (schedule) · 2026-07-24T13:21:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/30096555106
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-25T02:49:06Z
- price_usd: 1.5570588484322028
- top10_holder_pct: 87.8426
- scenario_probabilities: Bull 0.4456, Base 0.4857, Stress 0.0687
- Probability drift: Bull +0.0011, Base -0.0003, Stress -0.0008

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
