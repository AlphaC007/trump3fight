# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-23 12:09
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-23T02:51:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/24814071458
- Most recent run #2: success (schedule) · 2026-04-22T13:10:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/24780154756
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-23T02:52:03Z
- price_usd: 2.8671518560747034
- top10_holder_pct: 88.8461
- scenario_probabilities: Bull 0.5229, Base 0.4083, Stress 0.0688
- Probability drift: Bull +0.0652, Base -0.0749, Stress +0.0097

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
