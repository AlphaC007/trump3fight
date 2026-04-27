# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-27 22:52
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-27T13:22:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/24997589985
- Most recent run #2: success (schedule) · 2026-04-27T08:22:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/24984360950
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-27T13:22:59Z
- price_usd: 2.5435174284757425
- top10_holder_pct: 88.9318
- scenario_probabilities: Bull 0.4453, Base 0.4858, Stress 0.0689
- Probability drift: Bull +0.0085, Base -0.0018, Stress -0.0067

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
