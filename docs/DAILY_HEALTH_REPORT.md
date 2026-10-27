# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-27 13:49
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-27T04:10:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/40448308403
- Most recent run #2: success (schedule) · 2026-10-26T18:00:44Z · https://github.com/AlphaC007/trump3fight/actions/runs/40373919137
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-27T04:10:59Z
- price_usd: 1.6834874648153515
- top10_holder_pct: 88.1488
- scenario_probabilities: Bull 0.4841, Base 0.4147, Stress 0.1012
- Probability drift: Bull -0.0016, Base +0.0015, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
