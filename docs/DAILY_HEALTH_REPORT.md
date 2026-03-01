# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-01 21:58
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-01T13:50:31Z · https://github.com/AlphaC007/trump-thesis-lab/actions/runs/22544771288
- Most recent run #2: success (schedule) · 2026-03-01T07:48:06Z · https://github.com/AlphaC007/trump-thesis-lab/actions/runs/22538862055
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-01T13:50:48Z
- price_usd: 3.45
- top10_holder_pct: 97.9157
- scenario_probabilities: Bull 0.5108, Base 0.3974, Stress 0.0918
- Probability drift: Bull -0.0049, Base +0.0047, Stress +0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
