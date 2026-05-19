# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-19 12:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-19T03:50:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/26075049365
- Most recent run #2: success (schedule) · 2026-05-18T14:57:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/26041477621
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-19T03:50:33Z
- price_usd: 2.0653133853223493
- top10_holder_pct: 89.0623
- scenario_probabilities: Bull 0.5251, Base 0.4062, Stress 0.0687
- Probability drift: Bull +0.0797, Base -0.0795, Stress -0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
