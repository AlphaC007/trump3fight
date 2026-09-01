# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-01 13:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-01T04:08:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/33468723200
- Most recent run #2: success (schedule) · 2026-08-31T18:32:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/33425577145
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-01T04:08:29Z
- price_usd: 2.397634872946711
- top10_holder_pct: 88.8733
- scenario_probabilities: Bull 0.4354, Base 0.4879, Stress 0.0767
- Probability drift: Bull -0.0090, Base +0.0020, Stress +0.0070

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
