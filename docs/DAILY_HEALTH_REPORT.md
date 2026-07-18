# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-18 22:11
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-18T12:57:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/29645258878
- Most recent run #2: success (schedule) · 2026-07-18T07:46:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/29636313407
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-18T12:57:26Z
- price_usd: 1.6816616543599807
- top10_holder_pct: 89.0372
- scenario_probabilities: Bull 0.4208, Base 0.4868, Stress 0.0924
- Probability drift: Bull -0.0106, Base -0.0019, Stress +0.0125

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
