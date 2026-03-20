# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-20 13:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-20T05:07:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/23329935786
- Most recent run #2: success (schedule) · 2026-03-19T14:38:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/23300321416
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-20T05:07:36Z
- price_usd: 3.385355966282396
- top10_holder_pct: 88.7145
- scenario_probabilities: Bull 0.4736, Base 0.4433, Stress 0.0831
- Probability drift: Bull -0.0006, Base -0.0002, Stress +0.0008

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
