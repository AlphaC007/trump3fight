# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-08 14:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-08T05:02:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/42449165213
- Most recent run #2: success (schedule) · 2026-11-07T17:14:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/42395295479
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-08T05:02:27Z
- price_usd: 1.1769618241425548
- top10_holder_pct: 88.4533
- scenario_probabilities: Bull 0.4058, Base 0.4958, Stress 0.0984
- Probability drift: Bull -0.0729, Base +0.0759, Stress -0.0030

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
