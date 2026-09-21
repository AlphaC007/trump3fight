# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-21 13:42
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-21T03:56:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/35559238338
- Most recent run #2: success (schedule) · 2026-09-20T15:11:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/35518793719
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-21T03:57:05Z
- price_usd: 2.0952414442374994
- top10_holder_pct: 87.7272
- scenario_probabilities: Bull 0.3855, Base 0.5, Stress 0.1145
- Probability drift: Bull -0.0499, Base +0.0121, Stress +0.0378

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
