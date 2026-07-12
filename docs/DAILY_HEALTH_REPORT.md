# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-12 22:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-12T13:01:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/29193669495
- Most recent run #2: success (schedule) · 2026-07-12T08:13:44Z · https://github.com/AlphaC007/trump3fight/actions/runs/29185504084
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-12T13:01:54Z
- price_usd: 1.5783384720332976
- top10_holder_pct: 88.9635
- scenario_probabilities: Bull 0.4447, Base 0.4859, Stress 0.0694
- Probability drift: Bull +0.0020, Base -0.0004, Stress -0.0016

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
