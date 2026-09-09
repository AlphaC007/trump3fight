# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-09 13:36
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-09T03:42:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/34308135560
- Most recent run #2: success (schedule) · 2026-09-08T15:45:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/34246806663
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-09T03:42:17Z
- price_usd: 2.2164799198632674
- top10_holder_pct: 88.4822
- scenario_probabilities: Bull 0.4576, Base 0.4832, Stress 0.0592
- Probability drift: Bull +0.0008, Base -0.0001, Stress -0.0007

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
