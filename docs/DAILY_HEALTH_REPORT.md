# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-31 11:46
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-31T02:39:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/23777831899
- Most recent run #2: success (schedule) · 2026-03-30T13:01:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/23746051698
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-31T02:39:14Z
- price_usd: 2.9910398279637462
- top10_holder_pct: 88.2335
- scenario_probabilities: Bull 0.4464, Base 0.4856, Stress 0.068
- Probability drift: Bull -0.0105, Base +0.0023, Stress +0.0082

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
