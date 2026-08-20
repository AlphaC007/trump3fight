# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-20 10:11
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-20T01:19:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/32320613851
- Most recent run #2: success (schedule) · 2026-08-19T12:29:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/32252932300
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-20T01:19:57Z
- price_usd: 1.7766309267579128
- top10_holder_pct: 88.1388
- scenario_probabilities: Bull 0.4248, Base 0.4827, Stress 0.0925
- Probability drift: Bull -0.0091, Base -0.0054, Stress +0.0145

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
