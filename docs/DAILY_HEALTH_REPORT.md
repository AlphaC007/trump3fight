# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-27 23:32
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-27T14:14:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/30274104399
- Most recent run #2: success (schedule) · 2026-07-27T09:48:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/30255476623
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-27T14:14:30Z
- price_usd: 1.5819796200280172
- top10_holder_pct: 88.1759
- scenario_probabilities: Bull 0.4512, Base 0.4845, Stress 0.0643
- Probability drift: Bull +0.0074, Base -0.0016, Stress -0.0058

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
