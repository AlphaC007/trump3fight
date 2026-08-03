# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-03 12:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-03T03:14:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/30781318213
- Most recent run #2: success (schedule) · 2026-08-02T13:04:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/30749145443
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-03T03:14:30Z
- price_usd: 1.4365034566110384
- top10_holder_pct: 87.985
- scenario_probabilities: Bull 0.4307, Base 0.4889, Stress 0.0804
- Probability drift: Bull -0.0020, Base +0.0004, Stress +0.0016

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
