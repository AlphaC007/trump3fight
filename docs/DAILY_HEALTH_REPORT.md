# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-06 22:02
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-06T12:54:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/24032573167
- Most recent run #2: success (schedule) · 2026-04-06T07:28:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/24023158270
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-06T12:54:33Z
- price_usd: 2.906265647485198
- top10_holder_pct: 88.1032
- scenario_probabilities: Bull 0.4377, Base 0.4874, Stress 0.0749
- Probability drift: Bull -0.0059, Base +0.0013, Stress +0.0046

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
