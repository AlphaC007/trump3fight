# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-24 01:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-23T15:52:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/35884732372
- Most recent run #2: success (schedule) · 2026-09-23T10:47:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/35850809792
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-23T15:52:33Z
- price_usd: 1.988287189726494
- top10_holder_pct: 88.2424
- scenario_probabilities: Bull 0.3939, Base 0.4983, Stress 0.1078
- Probability drift: Bull +0.0106, Base -0.0009, Stress -0.0097

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
