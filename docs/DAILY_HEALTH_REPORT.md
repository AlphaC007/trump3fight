# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-28 14:27
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-28T04:39:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/40633554487
- Most recent run #2: success (schedule) · 2026-10-27T17:08:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/40547713989
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-28T04:39:40Z
- price_usd: 1.7115422579406938
- top10_holder_pct: 88.1619
- scenario_probabilities: Bull 0.3919, Base 0.4987, Stress 0.1094
- Probability drift: Bull -0.0881, Base +0.0801, Stress +0.0080

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
