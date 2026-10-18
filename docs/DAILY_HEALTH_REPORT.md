# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-19 00:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-18T15:09:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/39139234285
- Most recent run #2: success (schedule) · 2026-10-18T10:24:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/39119143895
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-18T15:10:04Z
- price_usd: 1.6975526721075436
- top10_holder_pct: 88.1543
- scenario_probabilities: Bull 0.4808, Base 0.4179, Stress 0.1013
- Probability drift: Bull -0.0005, Base +0.0005, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
