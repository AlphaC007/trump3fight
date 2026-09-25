# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-25 13:38
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-25T03:59:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/36092604851
- Most recent run #2: success (schedule) · 2026-09-24T16:14:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/36025978252
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-25T03:59:54Z
- price_usd: 2.08087133803387
- top10_holder_pct: 88.3548
- scenario_probabilities: Bull 0.387, Base 0.4997, Stress 0.1133
- Probability drift: Bull +0.0012, Base -0.0003, Stress -0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
