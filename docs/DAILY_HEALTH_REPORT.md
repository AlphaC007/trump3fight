# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-23 10:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-23T01:26:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/32610367737
- Most recent run #2: success (schedule) · 2026-08-22T12:22:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/32572817256
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-23T01:26:53Z
- price_usd: 2.3596525000293473
- top10_holder_pct: 88.3628
- scenario_probabilities: Bull 0.4323, Base 0.4898, Stress 0.0779
- Probability drift: Bull +0.0115, Base +0.0063, Stress -0.0178

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
