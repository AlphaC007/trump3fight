# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-14 04:06
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-13T19:00:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/43487999406
- Most recent run #2: success (schedule) · 2026-11-13T13:56:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/43438074827
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-13T19:00:18Z
- price_usd: 1.1095840494169371
- top10_holder_pct: 88.4573
- scenario_probabilities: Bull 0.397, Base 0.4977, Stress 0.1053
- Probability drift: Bull -0.0036, Base +0.0008, Stress +0.0028

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
