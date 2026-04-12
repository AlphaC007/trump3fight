# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-12 21:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-12T12:43:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/24307037714
- Most recent run #2: success (schedule) · 2026-04-12T07:12:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/24301215347
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-12T12:43:52Z
- price_usd: 2.794196000126253
- top10_holder_pct: 88.1643
- scenario_probabilities: Bull 0.4555, Base 0.4836, Stress 0.0609
- Probability drift: Bull -0.0669, Base +0.0748, Stress -0.0079

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
