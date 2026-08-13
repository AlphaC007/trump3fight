# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-13 22:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-13T12:52:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/31702112507
- Most recent run #2: success (schedule) · 2026-08-13T07:23:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/31677538792
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-13T12:52:32Z
- price_usd: 1.395454396131573
- top10_holder_pct: 87.8962
- scenario_probabilities: Bull 0.425, Base 0.4881, Stress 0.0869
- Probability drift: Bull +0.0003, Base +0.0001, Stress -0.0004

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
