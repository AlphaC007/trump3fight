# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-11 23:50
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-11T14:32:57Z · https://github.com/AlphaC007/trump3fight/actions/runs/25676618587
- Most recent run #2: success (schedule) · 2026-05-11T09:36:35Z · https://github.com/AlphaC007/trump3fight/actions/runs/25662299584
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-11T14:33:05Z
- price_usd: 2.392066054393892
- top10_holder_pct: 89.2454
- scenario_probabilities: Bull 0.442, Base 0.4865, Stress 0.0715
- Probability drift: Bull -0.0073, Base +0.0015, Stress +0.0058

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
