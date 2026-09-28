# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-29 03:51
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-28T19:02:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/36469429533
- Most recent run #2: success (schedule) · 2026-09-28T12:56:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/36425140047
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-28T19:02:29Z
- price_usd: 2.014532673821161
- top10_holder_pct: 88.5709
- scenario_probabilities: Bull 0.4149, Base 0.4939, Stress 0.0912
- Probability drift: Bull +0.0054, Base -0.0011, Stress -0.0043

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
