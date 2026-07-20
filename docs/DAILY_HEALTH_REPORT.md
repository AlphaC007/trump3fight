# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-20 12:31
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-20T03:23:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/29714546801
- Most recent run #2: success (schedule) · 2026-07-19T12:59:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/29688019427
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-20T03:23:25Z
- price_usd: 1.5835004091719111
- top10_holder_pct: 88.9756
- scenario_probabilities: Bull 0.4582, Base 0.4831, Stress 0.0587
- Probability drift: Bull -0.0651, Base +0.0752, Stress -0.0101

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
