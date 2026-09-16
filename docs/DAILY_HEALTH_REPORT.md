# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-16 13:31
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-16T03:54:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/35053561604
- Most recent run #2: success (schedule) · 2026-09-15T15:59:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/34992058530
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-16T03:54:29Z
- price_usd: 1.866119379208491
- top10_holder_pct: 88.2446
- scenario_probabilities: Bull 0.4516, Base 0.4844, Stress 0.064
- Probability drift: Bull +0.0061, Base -0.0014, Stress -0.0047

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
