# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-11 22:07
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-11T12:45:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/31492759140
- Most recent run #2: success (schedule) · 2026-08-11T07:03:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/31467427858
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-11T12:45:34Z
- price_usd: 1.5065042873907704
- top10_holder_pct: 87.9194
- scenario_probabilities: Bull 0.4419, Base 0.4865, Stress 0.0716
- Probability drift: Bull +0.0008, Base -0.0002, Stress -0.0006

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
