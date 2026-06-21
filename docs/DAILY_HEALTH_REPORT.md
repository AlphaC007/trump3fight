# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-21 23:04
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-21T13:52:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/27906473853
- Most recent run #2: success (schedule) · 2026-06-21T09:47:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/27900525747
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-21T13:52:21Z
- price_usd: 1.9224575179011103
- top10_holder_pct: 89.0525
- scenario_probabilities: Bull 0.461, Base 0.4825, Stress 0.0565
- Probability drift: Bull +0.0058, Base -0.0012, Stress -0.0046

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
