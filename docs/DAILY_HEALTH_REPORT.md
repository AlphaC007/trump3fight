# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-16 12:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-16T03:26:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/25951585782
- Most recent run #2: success (schedule) · 2026-05-15T13:48:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/25921368488
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-16T03:27:03Z
- price_usd: 2.2516185171852294
- top10_holder_pct: 89.0561
- scenario_probabilities: Bull 0.4535, Base 0.4841, Stress 0.0624
- Probability drift: Bull -0.0813, Base +0.0874, Stress -0.0061

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
