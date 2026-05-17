# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-17 22:17
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-17T13:03:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/25991633790
- Most recent run #2: success (schedule) · 2026-05-17T08:19:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/25985691252
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-17T13:03:14Z
- price_usd: 2.176107961942424
- top10_holder_pct: 89.0304
- scenario_probabilities: Bull 0.5234, Base 0.4078, Stress 0.0688
- Probability drift: Bull +0.0006, Base -0.0006, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
