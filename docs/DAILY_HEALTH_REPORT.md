# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-30 00:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-29T15:33:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/28383732403
- Most recent run #2: success (schedule) · 2026-06-29T10:55:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/28366960757
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-29T15:33:43Z
- price_usd: 1.676668609309358
- top10_holder_pct: 88.3469
- scenario_probabilities: Bull 0.4428, Base 0.4863, Stress 0.0709
- Probability drift: Bull +0.0068, Base -0.0014, Stress -0.0054

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
