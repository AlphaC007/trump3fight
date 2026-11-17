# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-17 16:41
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-17T07:02:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/44035687090
- Most recent run #2: success (schedule) · 2026-11-16T21:28:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/43960417506
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-17T07:02:58Z
- price_usd: 0.9601309211026537
- top10_holder_pct: 88.3419
- scenario_probabilities: Bull 0.4033, Base 0.4963, Stress 0.1004
- Probability drift: Bull -0.0036, Base +0.0007, Stress +0.0029

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
