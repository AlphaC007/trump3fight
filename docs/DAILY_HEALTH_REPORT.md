# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-14 11:57
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-14T02:49:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/24378302917
- Most recent run #2: success (schedule) · 2026-04-13T13:08:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/24345079309
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-14T02:49:12Z
- price_usd: 2.8593070434532795
- top10_holder_pct: 88.216
- scenario_probabilities: Bull 0.4556, Base 0.4836, Stress 0.0608
- Probability drift: Bull -0.0048, Base +0.0010, Stress +0.0038

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
