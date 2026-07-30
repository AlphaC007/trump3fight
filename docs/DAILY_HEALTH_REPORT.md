# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-30 11:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-30T02:33:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/30508765987
- Most recent run #2: success (schedule) · 2026-07-29T13:51:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/30457941403
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-30T02:33:13Z
- price_usd: 1.475371076316924
- top10_holder_pct: 87.8355
- scenario_probabilities: Bull 0.4327, Base 0.4884, Stress 0.0789
- Probability drift: Bull -0.0136, Base +0.0028, Stress +0.0108

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
