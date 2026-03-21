# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-21 22:01
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-21T13:53:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/23381144087
- Most recent run #2: success (schedule) · 2026-03-21T07:46:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/23375100119
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-21T13:53:53Z
- price_usd: 3.3416002567090035
- top10_holder_pct: 88.7412
- scenario_probabilities: Bull 0.4754, Base 0.444, Stress 0.0806
- Probability drift: Bull -0.0050, Base -0.0018, Stress +0.0068

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
