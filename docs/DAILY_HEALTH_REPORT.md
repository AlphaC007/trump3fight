# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-21 12:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-21T02:51:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/29796923340
- Most recent run #2: success (schedule) · 2026-07-20T13:51:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/29748039806
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-21T02:51:19Z
- price_usd: 1.5940697855914037
- top10_holder_pct: 88.9741
- scenario_probabilities: Bull 0.4262, Base 0.4885, Stress 0.0853
- Probability drift: Bull -0.0191, Base +0.0028, Stress +0.0163

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
