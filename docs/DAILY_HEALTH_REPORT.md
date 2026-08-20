# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-20 21:35
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-20T12:31:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/32369279355
- Most recent run #2: success (schedule) · 2026-08-20T06:41:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/32340642453
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-20T12:31:28Z
- price_usd: 1.664805803542586
- top10_holder_pct: 88.2303
- scenario_probabilities: Bull 0.4494, Base 0.4862, Stress 0.0644
- Probability drift: Bull +0.0044, Base -0.0010, Stress -0.0034

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
