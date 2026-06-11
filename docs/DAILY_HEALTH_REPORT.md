# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-12 00:41
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-11T15:40:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/27358835018
- Most recent run #2: success (schedule) · 2026-06-11T10:20:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/27340148236
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-11T15:40:32Z
- price_usd: 1.7177327402967557
- top10_holder_pct: 89.0463
- scenario_probabilities: Bull 0.447, Base 0.4854, Stress 0.0676
- Probability drift: Bull -0.0017, Base +0.0003, Stress +0.0014

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
