# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-03 13:56
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-03T04:22:58Z · https://github.com/AlphaC007/trump3fight/actions/runs/26863547444
- Most recent run #2: success (schedule) · 2026-06-02T16:06:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/26832318981
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-03T04:23:05Z
- price_usd: 1.949138612350511
- top10_holder_pct: 89.0248
- scenario_probabilities: Bull 0.4513, Base 0.4845, Stress 0.0642
- Probability drift: Bull +0.0091, Base -0.0019, Stress -0.0072

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
