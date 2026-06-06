# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-06 22:21
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-06T13:15:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/27063299583
- Most recent run #2: success (schedule) · 2026-06-06T08:31:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/27057516490
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-06T13:15:14Z
- price_usd: 1.584851472525037
- top10_holder_pct: 89.0131
- scenario_probabilities: Bull 0.46, Base 0.4827, Stress 0.0573
- Probability drift: Bull -0.0008, Base +0.0002, Stress +0.0006

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
