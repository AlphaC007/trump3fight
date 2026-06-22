# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-22 14:22
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-22T04:43:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/27930096142
- Most recent run #2: success (schedule) · 2026-06-21T13:52:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/27906473853
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-22T04:43:08Z
- price_usd: 1.8929307359658902
- top10_holder_pct: 89.0112
- scenario_probabilities: Bull 0.4451, Base 0.4858, Stress 0.0691
- Probability drift: Bull -0.0159, Base +0.0033, Stress +0.0126

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
