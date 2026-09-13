# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-13 13:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-13T03:49:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/34736438474
- Most recent run #2: success (schedule) · 2026-09-12T14:44:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/34700181099
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-13T03:49:56Z
- price_usd: 1.9784833787047615
- top10_holder_pct: 88.4232
- scenario_probabilities: Bull 0.4374, Base 0.4874, Stress 0.0752
- Probability drift: Bull -0.0084, Base +0.0017, Stress +0.0067

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
