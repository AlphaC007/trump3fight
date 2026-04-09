# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-09 11:43
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-09T02:35:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/24169405505
- Most recent run #2: success (schedule) · 2026-04-08T13:05:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/24136910883
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-09T02:35:49Z
- price_usd: 2.895900554066879
- top10_holder_pct: 88.1258
- scenario_probabilities: Bull 0.441, Base 0.4866, Stress 0.0724
- Probability drift: Bull -0.0088, Base +0.0018, Stress +0.0070

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
