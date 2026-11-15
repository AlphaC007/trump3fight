# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-15 15:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-15T05:26:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/43681108034
- Most recent run #2: success (schedule) · 2026-11-14T17:30:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/43621486907
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-15T05:26:50Z
- price_usd: 0.9531233452045097
- top10_holder_pct: 88.384
- scenario_probabilities: Bull 0.3964, Base 0.4978, Stress 0.1058
- Probability drift: Bull -0.0018, Base +0.0004, Stress +0.0014

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
