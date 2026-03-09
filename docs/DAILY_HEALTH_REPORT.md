# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-10 00:15
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-09T14:39:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/22858747015
- Most recent run #2: success (schedule) · 2026-03-09T08:01:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/22843859194
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-09T14:39:07Z
- price_usd: 2.9878614111339106
- top10_holder_pct: 89.7245
- scenario_probabilities: Bull 0.6502, Base 0.3192, Stress 0.0306
- Probability drift: Bull -0.0078, Base +0.0077, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
