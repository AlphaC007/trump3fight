# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-30 12:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-30T03:39:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/26673498337
- Most recent run #2: success (schedule) · 2026-05-29T14:45:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/26643974661
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-30T03:39:22Z
- price_usd: 2.032731564269935
- top10_holder_pct: 89.0202
- scenario_probabilities: Bull 0.4064, Base 0.4821, Stress 0.1115
- Probability drift: Bull +0.0833, Base +0.0323, Stress -0.1156

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
