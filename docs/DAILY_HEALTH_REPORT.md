# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-29 12:25
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-29T03:28:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/25089426569
- Most recent run #2: failure (schedule) · 2026-04-28T13:48:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/25056701271
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-29T03:28:21Z
- price_usd: 2.487629131899041
- top10_holder_pct: 88.9953
- scenario_probabilities: Bull 0.5247, Base 0.4065, Stress 0.0688
- Probability drift: Bull +0.0641, Base -0.0761, Stress +0.0120

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
