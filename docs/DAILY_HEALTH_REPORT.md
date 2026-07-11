# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-11 12:06
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-11T02:48:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/29136963794
- Most recent run #2: success (schedule) · 2026-07-10T14:04:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/29098446116
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-11T02:49:04Z
- price_usd: 1.613375611773339
- top10_holder_pct: 88.9145
- scenario_probabilities: Bull 0.4392, Base 0.4871, Stress 0.0737
- Probability drift: Bull +0.0020, Base -0.0004, Stress -0.0016

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
