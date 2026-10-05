# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-06 04:49
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-05T20:00:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/37367076012
- Most recent run #2: success (schedule) · 2026-10-05T13:38:26Z · https://github.com/AlphaC007/trump3fight/actions/runs/37318372581
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-05T20:11:27Z
- price_usd: 2.0564439178322114
- top10_holder_pct: 88.6078
- scenario_probabilities: Bull 0.48, Base 0.4186, Stress 0.1014
- Probability drift: Bull -0.0021, Base +0.0020, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
