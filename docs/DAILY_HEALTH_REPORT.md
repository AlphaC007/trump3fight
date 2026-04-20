# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-20 22:25
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-20T13:13:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/24668540922
- Most recent run #2: success (schedule) · 2026-04-20T08:05:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/24655462523
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-20T13:13:55Z
- price_usd: 2.8491338018723016
- top10_holder_pct: 88.757
- scenario_probabilities: Bull 0.4507, Base 0.4846, Stress 0.0647
- Probability drift: Bull +0.0006, Base -0.0002, Stress -0.0004

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
