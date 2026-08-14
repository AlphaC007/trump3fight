# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-14 11:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-14T02:05:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/31762678565
- Most recent run #2: success (schedule) · 2026-08-13T12:52:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/31702112507
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-14T02:05:52Z
- price_usd: 1.3946316932864802
- top10_holder_pct: 87.8903
- scenario_probabilities: Bull 0.4255, Base 0.4883, Stress 0.0862
- Probability drift: Bull +0.0005, Base +0.0002, Stress -0.0007

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
