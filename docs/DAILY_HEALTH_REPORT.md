# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-07 00:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-06T15:15:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/28802227348
- Most recent run #2: success (schedule) · 2026-07-06T10:16:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/28784391916
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-06T15:16:00Z
- price_usd: 1.652764540391684
- top10_holder_pct: 88.8058
- scenario_probabilities: Bull 0.4602, Base 0.4827, Stress 0.0571
- Probability drift: Bull +0.0096, Base -0.0020, Stress -0.0076

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
