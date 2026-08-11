# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-11 10:59
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-11T01:52:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/31450653408
- Most recent run #2: success (schedule) · 2026-08-10T12:51:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/31389965929
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-11T01:53:00Z
- price_usd: 1.4975814432857948
- top10_holder_pct: 87.8927
- scenario_probabilities: Bull 0.4374, Base 0.4874, Stress 0.0752
- Probability drift: Bull -0.0071, Base +0.0015, Stress +0.0056

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
