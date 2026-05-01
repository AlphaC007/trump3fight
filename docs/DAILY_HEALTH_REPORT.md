# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-01 22:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-01T13:02:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/25215239474
- Most recent run #2: success (schedule) · 2026-05-01T08:09:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/25207596435
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-01T13:02:56Z
- price_usd: 2.3299652023415343
- top10_holder_pct: 88.8928
- scenario_probabilities: Bull 0.4553, Base 0.4837, Stress 0.061
- Probability drift: Bull -0.0683, Base +0.0761, Stress -0.0078

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
