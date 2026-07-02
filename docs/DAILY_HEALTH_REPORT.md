# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-02 23:00
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-02T13:42:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/28594730548
- Most recent run #2: success (schedule) · 2026-07-02T08:53:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/28577767993
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-02T13:42:44Z
- price_usd: 1.7100626692399057
- top10_holder_pct: 88.4943
- scenario_probabilities: Bull 0.4623, Base 0.4822, Stress 0.0555
- Probability drift: Bull +0.0026, Base -0.0006, Stress -0.0020

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
