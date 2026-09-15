# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-16 01:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-15T15:59:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/34992058530
- Most recent run #2: success (schedule) · 2026-09-15T11:06:04Z · https://github.com/AlphaC007/trump3fight/actions/runs/34961454029
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-15T15:59:18Z
- price_usd: 1.9764326393290699
- top10_holder_pct: 88.2839
- scenario_probabilities: Bull 0.4455, Base 0.4858, Stress 0.0687
- Probability drift: Bull -0.0026, Base +0.0006, Stress +0.0020

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
