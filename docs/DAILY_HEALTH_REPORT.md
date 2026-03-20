# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-20 23:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-20T14:31:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/23347506784
- Most recent run #2: success (schedule) · 2026-03-20T07:58:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/23334057240
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-20T14:31:11Z
- price_usd: 3.3141595021716106
- top10_holder_pct: 88.7045
- scenario_probabilities: Bull 0.4751, Base 0.4439, Stress 0.081
- Probability drift: Bull +0.0047, Base +0.0018, Stress -0.0065

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
