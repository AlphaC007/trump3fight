# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-30 22:21
- Executive Summary: Core pipeline available; current risk assessment is [Under Pressure].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-30T13:10:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/26684656359
- Most recent run #2: success (schedule) · 2026-05-30T08:26:12Z · https://github.com/AlphaC007/trump3fight/actions/runs/26679201155
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-30T13:10:34Z
- price_usd: 2.0022621717398077
- top10_holder_pct: 89.0151
- scenario_probabilities: Bull 0.3284, Base 0.4603, Stress 0.2113
- Probability drift: Bull -0.0808, Base -0.0226, Stress +0.1034

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Under Pressure]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
