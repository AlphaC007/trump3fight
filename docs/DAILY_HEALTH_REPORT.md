# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-22 22:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-22T13:25:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/29923825998
- Most recent run #2: success (schedule) · 2026-07-22T08:25:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/29903943722
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-22T13:25:47Z
- price_usd: 1.5907077555060456
- top10_holder_pct: 88.9792
- scenario_probabilities: Bull 0.5229, Base 0.4083, Stress 0.0688
- Probability drift: Bull -0.0015, Base +0.0015, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
