# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-26 12:56
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-26T03:50:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/26431171329
- Most recent run #2: success (schedule) · 2026-05-25T14:39:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/26405996289
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-26T03:50:29Z
- price_usd: 2.047636391668895
- top10_holder_pct: 89.134
- scenario_probabilities: Bull 0.4589, Base 0.4829, Stress 0.0582
- Probability drift: Bull +0.0122, Base -0.0025, Stress -0.0097

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
