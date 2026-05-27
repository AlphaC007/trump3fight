# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-28 00:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-27T14:59:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/26519363872
- Most recent run #2: success (schedule) · 2026-05-27T09:42:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/26503564301
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-27T14:59:31Z
- price_usd: 1.9976667548403808
- top10_holder_pct: 89.1032
- scenario_probabilities: Bull 0.441, Base 0.4867, Stress 0.0723
- Probability drift: Bull +0.0034, Base -0.0007, Stress -0.0027

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
