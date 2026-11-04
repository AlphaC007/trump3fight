# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-05 04:05
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-04T19:10:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/41894378570
- Most recent run #2: success (schedule) · 2026-11-04T13:47:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/41841303852
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-04T19:10:38Z
- price_usd: 1.30009366389965
- top10_holder_pct: 88.6955
- scenario_probabilities: Bull 0.4724, Base 0.4191, Stress 0.1085
- Probability drift: Bull -0.0111, Base +0.0038, Stress +0.0073

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
