# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-10 12:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-10T03:34:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/25618853995
- Most recent run #2: success (schedule) · 2026-05-09T12:59:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/25601739195
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-10T03:34:28Z
- price_usd: 2.4525320217703714
- top10_holder_pct: 89.3573
- scenario_probabilities: Bull 0.4456, Base 0.4857, Stress 0.0687
- Probability drift: Bull +0.0102, Base -0.0021, Stress -0.0081

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
