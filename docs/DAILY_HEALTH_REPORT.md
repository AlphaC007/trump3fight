# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-26 12:21
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-26T03:13:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/30185819687
- Most recent run #2: success (schedule) · 2026-07-25T13:06:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/30159125183
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-26T03:13:28Z
- price_usd: 1.5721830901077614
- top10_holder_pct: 87.8453
- scenario_probabilities: Bull 0.4375, Base 0.4874, Stress 0.0751
- Probability drift: Bull -0.0071, Base +0.0015, Stress +0.0056

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
