# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-25 22:07
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-25T12:52:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/23541973736
- Most recent run #2: success (schedule) · 2026-03-25T07:01:12Z · https://github.com/AlphaC007/trump3fight/actions/runs/23529001417
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-25T12:52:54Z
- price_usd: 3.345982518291679
- top10_holder_pct: 88.7715
- scenario_probabilities: Bull 0.4182, Base 0.4859, Stress 0.0959
- Probability drift: Bull -0.0515, Base +0.0441, Stress +0.0074

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
