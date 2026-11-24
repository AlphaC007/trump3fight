# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-25 06:47
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-24T21:47:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/45494558983
- Most recent run #2: success (schedule) · 2026-11-24T16:58:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/45443250173
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-24T21:47:15Z
- price_usd: 0.8363012369725145
- top10_holder_pct: 88.4261
- scenario_probabilities: Bull 0.4792, Base 0.4194, Stress 0.1014
- Probability drift: Bull -0.0003, Base +0.0003, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
