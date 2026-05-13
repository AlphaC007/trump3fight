# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-13 12:38
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-13T03:39:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/25776793934
- Most recent run #2: success (schedule) · 2026-05-12T14:02:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/25739554309
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-13T03:39:54Z
- price_usd: 2.4873768122968145
- top10_holder_pct: 89.06
- scenario_probabilities: Bull 0.4381, Base 0.4873, Stress 0.0746
- Probability drift: Bull -0.0024, Base +0.0005, Stress +0.0019

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
