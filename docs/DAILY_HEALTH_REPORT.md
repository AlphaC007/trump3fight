# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-10 14:33
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-10T04:55:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/38025715637
- Most recent run #2: success (schedule) · 2026-10-09T17:48:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/37968813640
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-10T04:55:13Z
- price_usd: 1.9054886667011648
- top10_holder_pct: 88.6341
- scenario_probabilities: Bull 0.4796, Base 0.419, Stress 0.1014
- Probability drift: Bull -0.0028, Base +0.0027, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
