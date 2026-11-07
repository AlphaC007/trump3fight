# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-08 01:52
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-07T17:14:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/42395295479
- Most recent run #2: success (schedule) · 2026-11-07T12:28:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/42372611920
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-07T17:14:19Z
- price_usd: 1.1900365903287262
- top10_holder_pct: 88.4932
- scenario_probabilities: Bull 0.4787, Base 0.4199, Stress 0.1014
- Probability drift: Bull +0.0000, Base +0.0000, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
