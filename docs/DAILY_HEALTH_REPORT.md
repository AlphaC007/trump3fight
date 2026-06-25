# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-25 12:57
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-25T03:50:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/28145595963
- Most recent run #2: success (schedule) · 2026-06-24T14:11:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/28104763826
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-25T03:50:55Z
- price_usd: 1.6961596580459386
- top10_holder_pct: 88.9613
- scenario_probabilities: Bull 0.4496, Base 0.4849, Stress 0.0655
- Probability drift: Bull +0.0062, Base -0.0012, Stress -0.0050

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
