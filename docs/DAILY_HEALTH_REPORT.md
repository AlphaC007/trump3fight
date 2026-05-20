# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-21 00:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-20T14:43:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/26170052087
- Most recent run #2: success (schedule) · 2026-05-20T09:30:16Z · https://github.com/AlphaC007/trump3fight/actions/runs/26153912400
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-20T14:44:02Z
- price_usd: 2.0267521230573324
- top10_holder_pct: 89.1294
- scenario_probabilities: Bull 0.4298, Base 0.4891, Stress 0.0811
- Probability drift: Bull -0.0139, Base +0.0030, Stress +0.0109

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
