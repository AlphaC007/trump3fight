# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-07 11:45
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-07T02:40:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/24061594104
- Most recent run #2: success (schedule) · 2026-04-06T12:54:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/24032573167
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-07T02:40:24Z
- price_usd: 2.826374987968856
- top10_holder_pct: 88.0802
- scenario_probabilities: Bull 0.4444, Base 0.486, Stress 0.0696
- Probability drift: Bull +0.0067, Base -0.0014, Stress -0.0053

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
