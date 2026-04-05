# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-05 11:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-05T02:45:28Z · https://github.com/AlphaC007/trump3fight/actions/runs/23992776969
- Most recent run #2: success (schedule) · 2026-04-04T12:38:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/23979052581
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-05T02:45:35Z
- price_usd: 2.8683858717054793
- top10_holder_pct: 88.1937
- scenario_probabilities: Bull 0.4238, Base 0.4877, Stress 0.0885
- Probability drift: Bull +0.0102, Base +0.0033, Stress -0.0135

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
