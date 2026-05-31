# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-31 22:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-31T13:21:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/26713767872
- Most recent run #2: success (schedule) · 2026-05-31T08:42:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/26708001840
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-31T13:21:21Z
- price_usd: 2.0090359798250814
- top10_holder_pct: 89.0507
- scenario_probabilities: Bull 0.4539, Base 0.484, Stress 0.0621
- Probability drift: Bull +0.0109, Base -0.0022, Stress -0.0087

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
