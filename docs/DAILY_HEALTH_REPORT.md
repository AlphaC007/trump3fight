# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-20 22:57
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-20T13:44:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/27872975537
- Most recent run #2: success (schedule) · 2026-06-20T08:53:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/27866207769
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-20T13:44:38Z
- price_usd: 1.8089119769857744
- top10_holder_pct: 88.9706
- scenario_probabilities: Bull 0.4629, Base 0.4821, Stress 0.055
- Probability drift: Bull +0.0004, Base +0.0000, Stress -0.0004

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
