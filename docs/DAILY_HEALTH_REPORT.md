# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-21 13:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-21T03:47:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/39540505921
- Most recent run #2: success (schedule) · 2026-10-20T16:06:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/39454549161
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-21T03:47:37Z
- price_usd: 1.8069845805154645
- top10_holder_pct: 88.1579
- scenario_probabilities: Bull 0.4847, Base 0.4141, Stress 0.1012
- Probability drift: Bull -0.0002, Base +0.0002, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
