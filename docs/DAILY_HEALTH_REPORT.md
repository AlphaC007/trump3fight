# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-03 05:57
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-02T21:12:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/41526235706
- Most recent run #2: success (schedule) · 2026-11-02T14:47:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/41465321063
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-02T21:12:43Z
- price_usd: 1.5922624831412655
- top10_holder_pct: 88.713
- scenario_probabilities: Bull 0.4101, Base 0.4949, Stress 0.095
- Probability drift: Bull +0.0028, Base -0.0006, Stress -0.0022

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
