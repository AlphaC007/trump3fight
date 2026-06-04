# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-05 00:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-04T14:41:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/26958970496
- Most recent run #2: success (schedule) · 2026-06-04T09:53:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/26944488730
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-04T14:41:36Z
- price_usd: 1.8378531774875992
- top10_holder_pct: 89.069
- scenario_probabilities: Bull 0.4478, Base 0.4852, Stress 0.067
- Probability drift: Bull -0.0028, Base +0.0005, Stress +0.0023

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
