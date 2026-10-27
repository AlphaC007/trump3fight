# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-28 02:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-27T17:08:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/40547713989
- Most recent run #2: success (schedule) · 2026-10-27T11:37:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/40497482740
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-27T17:08:32Z
- price_usd: 1.6929780190824162
- top10_holder_pct: 88.144
- scenario_probabilities: Bull 0.48, Base 0.4186, Stress 0.1014
- Probability drift: Bull -0.0026, Base +0.0025, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
