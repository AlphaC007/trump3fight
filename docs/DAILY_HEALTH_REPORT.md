# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-05 23:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-05T14:19:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/33971489112
- Most recent run #2: success (schedule) · 2026-09-05T09:58:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/33959384436
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-05T14:20:01Z
- price_usd: 2.389829855973996
- top10_holder_pct: 88.8857
- scenario_probabilities: Bull 0.4373, Base 0.4874, Stress 0.0753
- Probability drift: Bull -0.0051, Base +0.0010, Stress +0.0041

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
