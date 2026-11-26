# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-26 17:02
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-26T07:23:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/45774895811
- Most recent run #2: success (schedule) · 2026-11-25T20:54:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/45699358805
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-26T07:23:08Z
- price_usd: 0.874634456563982
- top10_holder_pct: 87.9988
- scenario_probabilities: Bull 0.4043, Base 0.4961, Stress 0.0996
- Probability drift: Bull +0.0034, Base -0.0007, Stress -0.0027

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
