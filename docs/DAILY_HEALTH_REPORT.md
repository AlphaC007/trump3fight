# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-03 13:55
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-03T04:21:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/37096288801
- Most recent run #2: success (schedule) · 2026-10-02T17:10:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/37038879710
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-03T04:21:59Z
- price_usd: 2.0887732221787085
- top10_holder_pct: 88.3645
- scenario_probabilities: Bull 0.4826, Base 0.4161, Stress 0.1013
- Probability drift: Bull +0.0040, Base -0.0039, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
