# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-11 12:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-11T03:47:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/25649236953
- Most recent run #2: success (schedule) · 2026-05-10T13:01:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/25629418425
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-11T03:47:44Z
- price_usd: 2.4329511816832374
- top10_holder_pct: 89.3171
- scenario_probabilities: Bull 0.4487, Base 0.4851, Stress 0.0662
- Probability drift: Bull -0.0769, Base +0.0794, Stress -0.0025

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
