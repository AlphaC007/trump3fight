# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-08 13:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-08T03:37:12Z · https://github.com/AlphaC007/trump3fight/actions/runs/34184141068
- Most recent run #2: success (schedule) · 2026-09-07T16:58:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/34145607492
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-08T03:37:19Z
- price_usd: 2.2774241138954943
- top10_holder_pct: 88.5193
- scenario_probabilities: Bull 0.4479, Base 0.4852, Stress 0.0669
- Probability drift: Bull -0.0070, Base +0.0015, Stress +0.0055

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
