# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-18 11:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-18T02:39:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/24595077710
- Most recent run #2: success (schedule) · 2026-04-17T13:02:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/24566469992
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-18T02:39:48Z
- price_usd: 3.0126361933897936
- top10_holder_pct: 89.016
- scenario_probabilities: Bull 0.4424, Base 0.4864, Stress 0.0712
- Probability drift: Bull -0.0098, Base +0.0021, Stress +0.0077

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
