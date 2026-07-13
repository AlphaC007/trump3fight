# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-13 12:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-13T03:15:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/29221318377
- Most recent run #2: success (schedule) · 2026-07-12T13:01:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/29193669495
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-13T03:15:57Z
- price_usd: 1.5356672298745717
- top10_holder_pct: 88.969
- scenario_probabilities: Bull 0.4516, Base 0.4844, Stress 0.064
- Probability drift: Bull +0.0069, Base -0.0015, Stress -0.0054

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
