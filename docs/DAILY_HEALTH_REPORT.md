# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-12 13:17
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-12T03:42:12Z · https://github.com/AlphaC007/trump3fight/actions/runs/34671078869
- Most recent run #2: success (schedule) · 2026-09-11T15:38:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/34617286354
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-12T03:42:20Z
- price_usd: 1.9846761725974018
- top10_holder_pct: 88.3886
- scenario_probabilities: Bull 0.4482, Base 0.4852, Stress 0.0666
- Probability drift: Bull -0.0125, Base +0.0027, Stress +0.0098

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
