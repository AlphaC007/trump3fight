# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-26 01:35
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-25T16:15:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/36159537396
- Most recent run #2: success (schedule) · 2026-09-25T11:10:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/36127973547
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-25T16:15:07Z
- price_usd: 2.1035586370207615
- top10_holder_pct: 88.4084
- scenario_probabilities: Bull 0.4004, Base 0.4969, Stress 0.1027
- Probability drift: Bull +0.0085, Base -0.0018, Stress -0.0067

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
