# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-03 02:04
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-02T17:10:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/37038879710
- Most recent run #2: success (schedule) · 2026-10-02T11:54:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/37003585070
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-02T17:10:20Z
- price_usd: 2.115743798405296
- top10_holder_pct: 88.066
- scenario_probabilities: Bull 0.4786, Base 0.42, Stress 0.1014
- Probability drift: Bull +0.0621, Base -0.0736, Stress +0.0115

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
