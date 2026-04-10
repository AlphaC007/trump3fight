# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-10 11:56
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-10T02:47:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/24223800797
- Most recent run #2: success (schedule) · 2026-04-09T13:06:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/24191810801
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-10T02:48:04Z
- price_usd: 2.9217017197498145
- top10_holder_pct: 88.149
- scenario_probabilities: Bull 0.459, Base 0.4829, Stress 0.0581
- Probability drift: Bull +0.0084, Base -0.0018, Stress -0.0066

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
