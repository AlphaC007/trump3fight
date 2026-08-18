# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-18 21:32
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-18T12:29:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/32137068474
- Most recent run #2: success (schedule) · 2026-08-18T06:38:41Z · https://github.com/AlphaC007/trump3fight/actions/runs/32107806308
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-18T12:29:17Z
- price_usd: 1.4026795881292227
- top10_holder_pct: 87.9499
- scenario_probabilities: Bull 0.4462, Base 0.4855, Stress 0.0683
- Probability drift: Bull +0.0063, Base -0.0014, Stress -0.0049

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
