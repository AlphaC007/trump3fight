# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-13 23:37
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-13T14:11:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/25804637781
- Most recent run #2: success (schedule) · 2026-05-13T08:42:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/25788299215
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-13T14:12:08Z
- price_usd: 2.3737424458576366
- top10_holder_pct: 89.0543
- scenario_probabilities: Bull 0.5255, Base 0.4058, Stress 0.0687
- Probability drift: Bull +0.0017, Base -0.0016, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
