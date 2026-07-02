# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-02 12:53
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-02T03:49:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/28563987756
- Most recent run #2: success (schedule) · 2026-07-01T14:15:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/28524117519
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-02T03:49:28Z
- price_usd: 1.6948719465701696
- top10_holder_pct: 88.4535
- scenario_probabilities: Bull 0.4601, Base 0.4826, Stress 0.0573
- Probability drift: Bull +0.0150, Base -0.0032, Stress -0.0118

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
