# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-19 13:20
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-19T03:43:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/35419352954
- Most recent run #2: success (schedule) · 2026-09-18T15:33:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/35363151793
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-19T03:43:29Z
- price_usd: 2.0476650460062116
- top10_holder_pct: 88.106
- scenario_probabilities: Bull 0.436, Base 0.4877, Stress 0.0763
- Probability drift: Bull +0.0512, Base -0.0121, Stress -0.0391

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
