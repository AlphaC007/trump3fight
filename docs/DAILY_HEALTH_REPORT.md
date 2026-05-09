# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-09 12:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-09T03:22:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/25590336136
- Most recent run #2: success (schedule) · 2026-05-08T13:15:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/25557626797
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-09T03:22:41Z
- price_usd: 2.495696327796966
- top10_holder_pct: 89.3609
- scenario_probabilities: Bull 0.4536, Base 0.484, Stress 0.0624
- Probability drift: Bull -0.0023, Base +0.0005, Stress +0.0018

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
