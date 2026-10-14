# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-15 01:38
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-14T16:15:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/38596570273
- Most recent run #2: success (schedule) · 2026-10-14T11:12:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/38554957254
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-14T16:16:00Z
- price_usd: 1.866383374968124
- top10_holder_pct: 88.4606
- scenario_probabilities: Bull 0.4862, Base 0.4127, Stress 0.1011
- Probability drift: Bull +0.0160, Base +0.0382, Stress -0.0542

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
