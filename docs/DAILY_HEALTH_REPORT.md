# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-03 12:36
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-03T03:31:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/25268845731
- Most recent run #2: success (schedule) · 2026-05-02T12:53:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/25252349585
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-03T03:31:32Z
- price_usd: 2.331290456928997
- top10_holder_pct: 88.895
- scenario_probabilities: Bull 0.5274, Base 0.4039, Stress 0.0687
- Probability drift: Bull +0.0020, Base -0.0020, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
