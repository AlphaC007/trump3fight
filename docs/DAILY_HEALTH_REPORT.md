# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-24 22:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-24T13:06:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/26362092500
- Most recent run #2: success (schedule) · 2026-05-24T08:27:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/26356335494
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-24T13:07:00Z
- price_usd: 2.100224688722363
- top10_holder_pct: 89.142
- scenario_probabilities: Bull 0.4408, Base 0.4867, Stress 0.0725
- Probability drift: Bull -0.0069, Base +0.0014, Stress +0.0055

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
