# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-19 00:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-18T14:51:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/27768056703
- Most recent run #2: success (schedule) · 2026-06-18T10:18:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/27752734243
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-18T14:51:49Z
- price_usd: 1.8669389972325179
- top10_holder_pct: 88.9854
- scenario_probabilities: Bull 0.4508, Base 0.4846, Stress 0.0646
- Probability drift: Bull +0.0071, Base -0.0015, Stress -0.0056

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
