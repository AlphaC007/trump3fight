# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-18 13:02
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-18T03:56:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/26012651004
- Most recent run #2: success (schedule) · 2026-05-17T13:03:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/25991633790
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-18T03:56:21Z
- price_usd: 2.0853892412799344
- top10_holder_pct: 89.0427
- scenario_probabilities: Bull 0.4443, Base 0.486, Stress 0.0697
- Probability drift: Bull -0.0791, Base +0.0782, Stress +0.0009

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
