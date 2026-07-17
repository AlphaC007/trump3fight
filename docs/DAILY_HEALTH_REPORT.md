# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-17 22:21
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-17T13:11:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/29582986063
- Most recent run #2: success (schedule) · 2026-07-17T08:07:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/29565324173
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-17T13:11:13Z
- price_usd: 1.5165506061596261
- top10_holder_pct: 88.9839
- scenario_probabilities: Bull 0.5291, Base 0.4023, Stress 0.0686
- Probability drift: Bull +0.0030, Base -0.0029, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
