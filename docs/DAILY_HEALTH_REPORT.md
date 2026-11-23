# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-23 16:27
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-23T06:24:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/45123936065
- Most recent run #2: success (schedule) · 2026-11-22T18:53:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/45057587209
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-23T06:25:03Z
- price_usd: 0.9008685529658791
- top10_holder_pct: 88.3221
- scenario_probabilities: Bull 0.3975, Base 0.4976, Stress 0.1049
- Probability drift: Bull +0.0057, Base -0.0011, Stress -0.0046

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
