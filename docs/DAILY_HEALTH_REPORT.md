# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-30 02:40
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-29T17:50:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/40925218323
- Most recent run #2: success (schedule) · 2026-10-29T12:18:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/40872156213
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-29T17:51:00Z
- price_usd: 1.674220333749555
- top10_holder_pct: 88.181
- scenario_probabilities: Bull 0.4173, Base 0.4934, Stress 0.0893
- Probability drift: Bull +0.0060, Base -0.0012, Stress -0.0048

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
