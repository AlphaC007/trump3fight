# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-27 12:26
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-27T03:23:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/24975015746
- Most recent run #2: success (schedule) · 2026-04-26T12:50:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/24957046501
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-27T03:23:29Z
- price_usd: 2.606440198712302
- top10_holder_pct: 88.9483
- scenario_probabilities: Bull 0.4233, Base 0.4876, Stress 0.0891
- Probability drift: Bull -0.1012, Base +0.0809, Stress +0.0203

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
