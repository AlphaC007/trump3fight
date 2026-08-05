# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-05 11:53
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-05T02:41:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/30970071930
- Most recent run #2: success (schedule) · 2026-08-04T13:52:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/30915969036
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-05T02:41:24Z
- price_usd: 1.4728592988820235
- top10_holder_pct: 87.9369
- scenario_probabilities: Bull 0.4514, Base 0.4845, Stress 0.0641
- Probability drift: Bull +0.0124, Base -0.0026, Stress -0.0098

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
