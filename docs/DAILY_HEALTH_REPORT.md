# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-01 23:32
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-01T14:15:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/28524117519
- Most recent run #2: success (schedule) · 2026-07-01T09:42:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/28508417075
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-01T14:15:20Z
- price_usd: 1.6975499654336776
- top10_holder_pct: 88.4061
- scenario_probabilities: Bull 0.4451, Base 0.4858, Stress 0.0691
- Probability drift: Bull +0.0049, Base -0.0011, Stress -0.0038

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
