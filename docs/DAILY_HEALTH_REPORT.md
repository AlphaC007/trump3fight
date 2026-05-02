# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-02 22:01
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-02T12:53:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/25252349585
- Most recent run #2: success (schedule) · 2026-05-02T07:42:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/25247106198
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-02T12:53:26Z
- price_usd: 2.317234389823516
- top10_holder_pct: 88.897
- scenario_probabilities: Bull 0.5254, Base 0.4059, Stress 0.0687
- Probability drift: Bull +0.0636, Base -0.0764, Stress +0.0128

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
