# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-17 14:02
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-17T04:21:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/27665562819
- Most recent run #2: success (schedule) · 2026-06-16T16:27:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/27632436397
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-17T04:21:19Z
- price_usd: 1.921187117241689
- top10_holder_pct: 89.0661
- scenario_probabilities: Bull 0.446, Base 0.4856, Stress 0.0684
- Probability drift: Bull -0.0116, Base +0.0024, Stress +0.0092

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
