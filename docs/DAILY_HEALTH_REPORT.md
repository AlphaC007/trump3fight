# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-08 21:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-08T12:31:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/31257425833
- Most recent run #2: success (schedule) · 2026-08-08T06:49:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/31244782796
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-08T12:31:18Z
- price_usd: 1.4827549311368207
- top10_holder_pct: 87.9274
- scenario_probabilities: Bull 0.4493, Base 0.4849, Stress 0.0658
- Probability drift: Bull +0.0103, Base -0.0022, Stress -0.0081

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
