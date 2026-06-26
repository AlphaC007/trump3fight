# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-26 23:17
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-26T14:07:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/28243333978
- Most recent run #2: success (schedule) · 2026-06-26T09:22:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/28229250617
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-26T14:08:02Z
- price_usd: 1.6789866645109006
- top10_holder_pct: 88.8415
- scenario_probabilities: Bull 0.4562, Base 0.4835, Stress 0.0603
- Probability drift: Bull -0.0656, Base +0.0741, Stress -0.0085

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
