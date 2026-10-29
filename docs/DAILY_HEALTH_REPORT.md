# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-29 14:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-29T04:52:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/40820179164
- Most recent run #2: success (schedule) · 2026-10-28T17:43:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/40738454435
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-29T04:52:42Z
- price_usd: 1.682102133572517
- top10_holder_pct: 88.156
- scenario_probabilities: Bull 0.4118, Base 0.4945, Stress 0.0937
- Probability drift: Bull +0.0175, Base -0.0037, Stress -0.0138

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
