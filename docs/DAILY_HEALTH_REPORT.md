# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-11 13:15
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-11T05:02:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/22937629391
- Most recent run #2: success (schedule) · 2026-03-10T14:34:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/22907777567
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-11T05:02:43Z
- price_usd: 2.9271213745438365
- top10_holder_pct: 89.4891
- scenario_probabilities: Bull 0.6538, Base 0.3157, Stress 0.0305
- Probability drift: Bull +0.1254, Base -0.1163, Stress -0.0091

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
