# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-04 23:12
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-04T13:52:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/30915969036
- Most recent run #2: success (schedule) · 2026-08-04T08:33:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/30892420253
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-04T13:52:17Z
- price_usd: 1.4823091656013727
- top10_holder_pct: 87.9176
- scenario_probabilities: Bull 0.439, Base 0.4871, Stress 0.0739
- Probability drift: Bull +0.0047, Base -0.0009, Stress -0.0038

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
