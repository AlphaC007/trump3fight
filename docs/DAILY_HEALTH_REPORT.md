# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-26 13:42
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-26T04:04:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/36216761287
- Most recent run #2: success (schedule) · 2026-09-25T16:15:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/36159537396
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-26T04:05:02Z
- price_usd: 2.147816655289608
- top10_holder_pct: 88.4629
- scenario_probabilities: Bull 0.4064, Base 0.4957, Stress 0.0979
- Probability drift: Bull +0.0060, Base -0.0012, Stress -0.0048

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
