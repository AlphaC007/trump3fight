# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-11 13:28
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-11T03:38:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/34559182200
- Most recent run #2: success (schedule) · 2026-09-10T15:36:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/34496735410
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-11T03:38:12Z
- price_usd: 1.973832648388524
- top10_holder_pct: 88.3902
- scenario_probabilities: Bull 0.4565, Base 0.4834, Stress 0.0601
- Probability drift: Bull +0.0033, Base -0.0007, Stress -0.0026

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
