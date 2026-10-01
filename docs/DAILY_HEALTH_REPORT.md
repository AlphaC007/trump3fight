# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-02 02:35
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-01T17:48:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/36902097516
- Most recent run #2: success (schedule) · 2026-10-01T12:27:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/36861914026
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-01T17:48:52Z
- price_usd: 2.0662630690737753
- top10_holder_pct: 88.365
- scenario_probabilities: Bull 0.4082, Base 0.4953, Stress 0.0965
- Probability drift: Bull -0.0029, Base +0.0006, Stress +0.0023

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
