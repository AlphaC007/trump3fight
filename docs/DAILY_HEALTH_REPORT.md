# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-25 21:37
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-25T12:32:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/32848117263
- Most recent run #2: success (schedule) · 2026-08-25T06:42:07Z · https://github.com/AlphaC007/trump3fight/actions/runs/32818125716
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-25T12:32:14Z
- price_usd: 2.3376681063409865
- top10_holder_pct: 89.2779
- scenario_probabilities: Bull 0.4528, Base 0.4842, Stress 0.063
- Probability drift: Bull +0.0063, Base -0.0014, Stress -0.0049

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
