# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-15 12:43
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-15T03:42:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/25898975466
- Most recent run #2: success (schedule) · 2026-05-14T13:51:25Z · https://github.com/AlphaC007/trump3fight/actions/runs/25863856764
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-15T03:42:22Z
- price_usd: 2.36528551306434
- top10_holder_pct: 89.1061
- scenario_probabilities: Bull 0.5415, Base 0.3902, Stress 0.0683
- Probability drift: Bull +0.0180, Base -0.0175, Stress -0.0005

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
