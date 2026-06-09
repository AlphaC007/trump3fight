# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-09 23:46
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-09T14:32:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/27213464647
- Most recent run #2: success (schedule) · 2026-06-09T09:40:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/27197546222
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-09T14:32:14Z
- price_usd: 1.6346984845670782
- top10_holder_pct: 88.9725
- scenario_probabilities: Bull 0.4426, Base 0.4863, Stress 0.0711
- Probability drift: Bull -0.0075, Base +0.0015, Stress +0.0060

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
