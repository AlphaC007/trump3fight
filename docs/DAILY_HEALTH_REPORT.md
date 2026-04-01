# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-01 22:22
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-01T13:02:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/23849970425
- Most recent run #2: success (schedule) · 2026-04-01T07:19:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/23836875181
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-01T13:02:43Z
- price_usd: 3.0287779799364465
- top10_holder_pct: 88.2967
- scenario_probabilities: Bull 0.4429, Base 0.4863, Stress 0.0708
- Probability drift: Bull +0.0076, Base -0.0015, Stress -0.0061

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
