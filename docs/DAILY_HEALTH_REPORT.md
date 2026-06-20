# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-20 13:05
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-20T03:56:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/27859462692
- Most recent run #2: success (schedule) · 2026-06-19T14:47:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/27832525205
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-20T03:56:27Z
- price_usd: 1.827764763767754
- top10_holder_pct: 88.9828
- scenario_probabilities: Bull 0.4387, Base 0.4872, Stress 0.0741
- Probability drift: Bull -0.0130, Base +0.0028, Stress +0.0102

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
