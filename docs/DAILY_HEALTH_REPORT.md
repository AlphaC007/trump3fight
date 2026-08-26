# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-26 21:42
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-26T12:35:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/32969397871
- Most recent run #2: success (schedule) · 2026-08-26T06:44:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/32939456300
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-26T12:35:54Z
- price_usd: 2.258434367158096
- top10_holder_pct: 89.3646
- scenario_probabilities: Bull 0.4608, Base 0.4825, Stress 0.0567
- Probability drift: Bull -0.0021, Base +0.0004, Stress +0.0017

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
