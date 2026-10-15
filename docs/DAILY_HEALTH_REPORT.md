# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-16 01:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-15T16:03:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/38765730359
- Most recent run #2: success (schedule) · 2026-10-15T10:52:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/38723331428
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-15T16:03:32Z
- price_usd: 1.8738727392994488
- top10_holder_pct: 88.4134
- scenario_probabilities: Bull 0.4801, Base 0.4185, Stress 0.1014
- Probability drift: Bull -0.0025, Base +0.0024, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
