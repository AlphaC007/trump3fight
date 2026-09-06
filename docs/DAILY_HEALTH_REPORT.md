# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-06 23:51
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-06T14:42:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/34040021164
- Most recent run #2: success (schedule) · 2026-09-06T10:16:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/34026978003
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-06T14:42:46Z
- price_usd: 2.3213834469779924
- top10_holder_pct: 88.9286
- scenario_probabilities: Bull 0.5276, Base 0.4037, Stress 0.0687
- Probability drift: Bull -0.0027, Base +0.0026, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
