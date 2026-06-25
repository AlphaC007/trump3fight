# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-25 23:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-25T14:09:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/28176188976
- Most recent run #2: success (schedule) · 2026-06-25T09:18:44Z · https://github.com/AlphaC007/trump3fight/actions/runs/28160012924
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-25T14:09:09Z
- price_usd: 1.6202682846911023
- top10_holder_pct: 88.9695
- scenario_probabilities: Bull 0.4518, Base 0.4844, Stress 0.0638
- Probability drift: Bull +0.0091, Base -0.0020, Stress -0.0071

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
