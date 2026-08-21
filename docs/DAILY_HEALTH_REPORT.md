# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-21 10:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-21T01:23:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/32436140942
- Most recent run #2: success (schedule) · 2026-08-20T12:31:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/32369279355
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-21T01:23:54Z
- price_usd: 1.652822490063974
- top10_holder_pct: 88.2772
- scenario_probabilities: Bull 0.5277, Base 0.4036, Stress 0.0687
- Probability drift: Bull +0.0783, Base -0.0826, Stress +0.0043

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
