# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-03 13:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-03T05:06:22Z · https://github.com/AlphaC007/trump-thesis-lab/actions/runs/22609197691
- Most recent run #2: success (schedule) · 2026-03-02T14:29:25Z · https://github.com/AlphaC007/trump-thesis-lab/actions/runs/22580427299
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-03T05:06:52Z
- price_usd: 3.45
- top10_holder_pct: 97.9956
- scenario_probabilities: Bull 0.5107, Base 0.3975, Stress 0.0918
- Probability drift: Bull +0.1170, Base -0.1097, Stress -0.0073

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
