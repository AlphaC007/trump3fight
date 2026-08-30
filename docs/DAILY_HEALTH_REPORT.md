# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-30 14:06
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-30T04:19:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/33292242628
- Most recent run #2: success (schedule) · 2026-08-29T15:59:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/33261730785
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-30T04:19:46Z
- price_usd: 2.58445721922071
- top10_holder_pct: 89.5877
- scenario_probabilities: Bull 0.4412, Base 0.4867, Stress 0.0721
- Probability drift: Bull -0.0011, Base +0.0003, Stress +0.0008

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
