# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-24 12:08
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-24T02:49:58Z · https://github.com/AlphaC007/trump3fight/actions/runs/30062639665
- Most recent run #2: success (schedule) · 2026-07-23T13:29:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/30011406880
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-24T02:50:05Z
- price_usd: 1.5837046667270533
- top10_holder_pct: 88.969
- scenario_probabilities: Bull 0.4398, Base 0.4869, Stress 0.0733
- Probability drift: Bull +0.0042, Base -0.0009, Stress -0.0033

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
