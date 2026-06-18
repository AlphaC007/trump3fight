# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-18 13:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-18T04:14:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/27736256156
- Most recent run #2: success (schedule) · 2026-06-17T14:56:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/27698253785
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-18T04:14:09Z
- price_usd: 1.883050914152343
- top10_holder_pct: 89.0286
- scenario_probabilities: Bull 0.4349, Base 0.4879, Stress 0.0772
- Probability drift: Bull +0.0108, Base +0.0001, Stress -0.0109

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
