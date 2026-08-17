# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-17 21:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-17T12:27:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/32029929949
- Most recent run #2: success (schedule) · 2026-08-17T06:50:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/32003289079
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-17T12:27:22Z
- price_usd: 1.4028467151041601
- top10_holder_pct: 87.9435
- scenario_probabilities: Bull 0.4315, Base 0.4886, Stress 0.0799
- Probability drift: Bull +0.0027, Base -0.0006, Stress -0.0021

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
