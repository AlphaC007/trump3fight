# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-19 12:17
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-19T02:54:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/29670922404
- Most recent run #2: success (schedule) · 2026-07-18T12:57:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/29645258878
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-19T02:54:51Z
- price_usd: 1.6497195936028521
- top10_holder_pct: 89.0439
- scenario_probabilities: Bull 0.4283, Base 0.4892, Stress 0.0825
- Probability drift: Bull +0.0075, Base +0.0024, Stress -0.0099

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
