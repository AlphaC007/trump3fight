# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-22 12:11
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-22T02:49:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/29886812147
- Most recent run #2: success (schedule) · 2026-07-21T13:21:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/29834037843
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-22T02:49:19Z
- price_usd: 1.585093722381623
- top10_holder_pct: 88.9656
- scenario_probabilities: Bull 0.5231, Base 0.4081, Stress 0.0688
- Probability drift: Bull +0.0898, Base -0.0802, Stress -0.0096

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
