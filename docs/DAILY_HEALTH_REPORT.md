# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-26 12:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-26T03:18:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/24947116757
- Most recent run #2: success (schedule) · 2026-04-25T12:45:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/24931211746
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-26T03:19:00Z
- price_usd: 2.633342597573236
- top10_holder_pct: 89.0943
- scenario_probabilities: Bull 0.5304, Base 0.401, Stress 0.0686
- Probability drift: Bull +0.0013, Base -0.0013, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
