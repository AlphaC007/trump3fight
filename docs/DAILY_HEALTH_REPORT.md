# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-10 22:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-10T13:01:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/25629418425
- Most recent run #2: success (schedule) · 2026-05-10T08:05:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/25623624953
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-10T13:02:01Z
- price_usd: 2.46256504059429
- top10_holder_pct: 89.3614
- scenario_probabilities: Bull 0.5256, Base 0.4057, Stress 0.0687
- Probability drift: Bull +0.0728, Base -0.0785, Stress +0.0057

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
