# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-21 12:00
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-21T02:50:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/24701440360
- Most recent run #2: success (schedule) · 2026-04-20T13:13:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/24668540922
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-21T02:50:08Z
- price_usd: 2.857592871311434
- top10_holder_pct: 88.7946
- scenario_probabilities: Bull 0.443, Base 0.4862, Stress 0.0708
- Probability drift: Bull -0.0077, Base +0.0016, Stress +0.0061

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
