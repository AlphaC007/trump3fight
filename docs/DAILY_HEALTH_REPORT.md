# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-30 00:31
- Executive Summary: Core pipeline available; current risk assessment is [Under Pressure].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-29T14:45:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/26643974661
- Most recent run #2: success (schedule) · 2026-05-29T09:51:56Z · https://github.com/AlphaC007/trump3fight/actions/runs/26630567357
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-29T14:45:49Z
- price_usd: 1.882298844742265
- top10_holder_pct: 89.0183
- scenario_probabilities: Bull 0.3231, Base 0.4498, Stress 0.2271
- Probability drift: Bull -0.0014, Base -0.0029, Stress +0.0043

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Under Pressure]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
