# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-07 23:21
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-07T13:48:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/25499869623
- Most recent run #2: success (schedule) · 2026-05-07T08:31:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/25484973364
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-07T13:48:17Z
- price_usd: 2.3800119174557253
- top10_holder_pct: 89.1742
- scenario_probabilities: Bull 0.4551, Base 0.4837, Stress 0.0612
- Probability drift: Bull +0.0139, Base -0.0029, Stress -0.0110

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
