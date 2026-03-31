# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-31 22:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-31T13:00:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/23798604469
- Most recent run #2: success (schedule) · 2026-03-31T07:12:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/23785126641
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-31T13:00:19Z
- price_usd: 2.984089406511433
- top10_holder_pct: 88.3238
- scenario_probabilities: Bull 0.4481, Base 0.4852, Stress 0.0667
- Probability drift: Bull -0.0058, Base +0.0012, Stress +0.0046

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
