# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-02 14:59
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-02T04:58:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/41391365637
- Most recent run #2: success (schedule) · 2026-11-01T17:27:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/41331572795
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-02T04:58:48Z
- price_usd: 1.6829984627705241
- top10_holder_pct: 88.7204
- scenario_probabilities: Bull 0.3953, Base 0.498, Stress 0.1067
- Probability drift: Bull -0.0010, Base +0.0003, Stress +0.0007

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
