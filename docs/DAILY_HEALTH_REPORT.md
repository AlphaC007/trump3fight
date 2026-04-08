# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-08 22:25
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-08T13:05:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/24136910883
- Most recent run #2: success (schedule) · 2026-04-08T07:17:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/24123025526
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-08T13:05:57Z
- price_usd: 3.0067392316260206
- top10_holder_pct: 88.0912
- scenario_probabilities: Bull 0.4498, Base 0.4848, Stress 0.0654
- Probability drift: Bull -0.0113, Base +0.0023, Stress +0.0090

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
