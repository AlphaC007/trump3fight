# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-19 00:14
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-18T14:57:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/26041477621
- Most recent run #2: success (schedule) · 2026-05-18T10:00:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/26026635649
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-18T14:57:38Z
- price_usd: 2.036395754207221
- top10_holder_pct: 89.0521
- scenario_probabilities: Bull 0.4454, Base 0.4857, Stress 0.0689
- Probability drift: Bull -0.0081, Base +0.0017, Stress +0.0064

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
