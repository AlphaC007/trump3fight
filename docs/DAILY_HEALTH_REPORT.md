# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-10 00:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-09T15:41:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/34371843274
- Most recent run #2: success (schedule) · 2026-09-09T10:46:26Z · https://github.com/AlphaC007/trump3fight/actions/runs/34342013530
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-09T15:41:10Z
- price_usd: 2.1851663700616424
- top10_holder_pct: 88.5035
- scenario_probabilities: Bull 0.4586, Base 0.4829, Stress 0.0585
- Probability drift: Bull +0.0007, Base -0.0002, Stress -0.0005

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
