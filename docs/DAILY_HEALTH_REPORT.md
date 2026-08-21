# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-21 21:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-21T12:30:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/32482188304
- Most recent run #2: success (schedule) · 2026-08-21T06:41:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/32455406643
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-21T12:30:23Z
- price_usd: 1.7963822116484491
- top10_holder_pct: 88.2842
- scenario_probabilities: Bull 0.4552, Base 0.4837, Stress 0.0611
- Probability drift: Bull -0.0684, Base +0.0761, Stress -0.0077

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
