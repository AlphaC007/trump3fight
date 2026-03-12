# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-12 13:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-12T05:07:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/22987511775
- Most recent run #2: success (schedule) · 2026-03-11T14:36:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/22957973913
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-12T05:07:42Z
- price_usd: 2.8636355015870674
- top10_holder_pct: 89.2547
- scenario_probabilities: Bull 0.6543, Base 0.3152, Stress 0.0305
- Probability drift: Bull -0.0067, Base +0.0066, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
