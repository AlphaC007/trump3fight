# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-18 21:52
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (workflow_dispatch) · 2026-04-18T13:09:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/24605392171
- Most recent run #2: success (schedule) · 2026-04-18T12:43:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/24604950600
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-18T13:09:58Z
- price_usd: 2.920422971828493
- top10_holder_pct: 89.0808
- scenario_probabilities: Bull 0.4405, Base 0.4868, Stress 0.0727
- Probability drift: Bull +0.0034, Base -0.0007, Stress -0.0027

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
