# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-28 13:04
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-28T03:52:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/26553615884
- Most recent run #2: success (schedule) · 2026-05-27T14:59:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/26519363872
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-28T03:52:35Z
- price_usd: 1.8971584115342104
- top10_holder_pct: 89.1136
- scenario_probabilities: Bull 0.4216, Base 0.4871, Stress 0.0913
- Probability drift: Bull -0.0194, Base +0.0004, Stress +0.0190

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
