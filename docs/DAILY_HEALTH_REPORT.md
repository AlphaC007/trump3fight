# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-28 11:31
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-28T02:29:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/23675489862
- Most recent run #2: success (schedule) · 2026-03-27T12:46:39Z · https://github.com/AlphaC007/trump3fight/actions/runs/23646875411
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-28T02:29:23Z
- price_usd: 2.9717020620008285
- top10_holder_pct: 88.4569
- scenario_probabilities: Bull 0.4328, Base 0.4884, Stress 0.0788
- Probability drift: Bull -0.0092, Base +0.0020, Stress +0.0072

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
