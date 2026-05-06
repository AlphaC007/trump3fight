# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-06 12:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-06T03:26:44Z · https://github.com/AlphaC007/trump3fight/actions/runs/25414818072
- Most recent run #2: success (schedule) · 2026-05-05T13:21:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/25378941857
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-06T03:26:56Z
- price_usd: 2.394041101570046
- top10_holder_pct: 89.1185
- scenario_probabilities: Bull 0.4588, Base 0.4829, Stress 0.0583
- Probability drift: Bull -0.0010, Base +0.0002, Stress +0.0008

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
