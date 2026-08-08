# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-08 10:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-08T01:46:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/31233437045
- Most recent run #2: success (schedule) · 2026-08-07T12:44:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/31179444062
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-08T01:46:32Z
- price_usd: 1.4773189696944262
- top10_holder_pct: 87.9236
- scenario_probabilities: Bull 0.4318, Base 0.4886, Stress 0.0796
- Probability drift: Bull +0.0006, Base -0.0002, Stress -0.0004

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
