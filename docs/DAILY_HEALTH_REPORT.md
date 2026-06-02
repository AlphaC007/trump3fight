# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-02 13:24
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-02T04:15:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/26798005745
- Most recent run #2: success (schedule) · 2026-06-01T17:22:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/26770550121
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-02T04:15:23Z
- price_usd: 2.0346705383800434
- top10_holder_pct: 89.0723
- scenario_probabilities: Bull 0.4408, Base 0.4867, Stress 0.0725
- Probability drift: Bull -0.0007, Base +0.0001, Stress +0.0006

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
