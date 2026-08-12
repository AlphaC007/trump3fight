# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-12 22:08
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-12T12:50:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/31598441131
- Most recent run #2: success (schedule) · 2026-08-12T07:20:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/31573595537
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-12T12:51:05Z
- price_usd: 1.4791614665929214
- top10_holder_pct: 87.9452
- scenario_probabilities: Bull 0.4259, Base 0.4884, Stress 0.0857
- Probability drift: Bull -0.0029, Base -0.0008, Stress +0.0037

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
