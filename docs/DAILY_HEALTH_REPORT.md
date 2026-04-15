# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-15 22:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-15T13:08:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/24456290693
- Most recent run #2: success (schedule) · 2026-04-15T07:43:26Z · https://github.com/AlphaC007/trump3fight/actions/runs/24442593651
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-15T13:08:28Z
- price_usd: 2.838437818283124
- top10_holder_pct: 88.4881
- scenario_probabilities: Bull 0.4497, Base 0.4849, Stress 0.0654
- Probability drift: Bull -0.0001, Base +0.0001, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
