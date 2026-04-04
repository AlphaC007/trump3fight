# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-04 21:42
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-04T12:38:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/23979052581
- Most recent run #2: success (schedule) · 2026-04-04T06:59:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/23973744249
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-04T12:38:29Z
- price_usd: 2.864263346497034
- top10_holder_pct: 88.1883
- scenario_probabilities: Bull 0.4136, Base 0.4844, Stress 0.102
- Probability drift: Bull -0.0045, Base -0.0015, Stress +0.0060

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
