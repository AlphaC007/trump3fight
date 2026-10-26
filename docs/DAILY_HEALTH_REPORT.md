# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-27 02:53
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-26T18:00:44Z · https://github.com/AlphaC007/trump3fight/actions/runs/40373919137
- Most recent run #2: success (schedule) · 2026-10-26T12:16:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/40321287645
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-26T18:00:50Z
- price_usd: 1.7019282485306175
- top10_holder_pct: 88.1849
- scenario_probabilities: Bull 0.4857, Base 0.4132, Stress 0.1011
- Probability drift: Bull +0.0009, Base -0.0008, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
