# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-25 23:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-25T14:39:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/26405996289
- Most recent run #2: success (schedule) · 2026-05-25T10:02:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/26394848194
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-25T14:39:59Z
- price_usd: 2.08118411965091
- top10_holder_pct: 89.1309
- scenario_probabilities: Bull 0.4467, Base 0.4854, Stress 0.0679
- Probability drift: Bull +0.0246, Base -0.0018, Stress -0.0228

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
