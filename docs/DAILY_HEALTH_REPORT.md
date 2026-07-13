# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-13 23:36
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-13T14:13:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/29257003579
- Most recent run #2: success (schedule) · 2026-07-13T09:22:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/29238855143
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-13T14:16:29Z
- price_usd: 1.5523480045938343
- top10_holder_pct: 88.8922
- scenario_probabilities: Bull 0.4442, Base 0.486, Stress 0.0698
- Probability drift: Bull -0.0033, Base +0.0007, Stress +0.0026

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
