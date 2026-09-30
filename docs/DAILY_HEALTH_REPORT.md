# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-30 14:11
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-30T04:36:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/36669628651
- Most recent run #2: failure (schedule) · 2026-09-29T17:23:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/36604604310
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-30T04:36:57Z
- price_usd: 2.0691548556339177
- top10_holder_pct: 88.696
- scenario_probabilities: Bull 0.4198, Base 0.4928, Stress 0.0874
- Probability drift: Bull +0.0105, Base -0.0023, Stress -0.0082

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
