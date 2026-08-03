# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-03 23:32
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-03T14:21:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/30822291819
- Most recent run #2: success (schedule) · 2026-08-03T09:40:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/30802389505
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-03T14:21:36Z
- price_usd: 1.4619935085745832
- top10_holder_pct: 87.8858
- scenario_probabilities: Bull 0.4387, Base 0.4872, Stress 0.0741
- Probability drift: Bull -0.0046, Base +0.0010, Stress +0.0036

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
