# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-26 11:43
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-26T02:37:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/23574721612
- Most recent run #2: success (schedule) · 2026-03-25T12:52:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/23541973736
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-26T02:37:18Z
- price_usd: 3.19320279164323
- top10_holder_pct: 88.5541
- scenario_probabilities: Bull 0.4517, Base 0.4844, Stress 0.0639
- Probability drift: Bull +0.0335, Base -0.0015, Stress -0.0320

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
