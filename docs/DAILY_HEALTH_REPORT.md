# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-27 14:01
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-27T04:18:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/36293942034
- Most recent run #2: success (schedule) · 2026-09-26T15:28:26Z · https://github.com/AlphaC007/trump3fight/actions/runs/36252054072
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-27T04:18:56Z
- price_usd: 2.0874907460373002
- top10_holder_pct: 88.4524
- scenario_probabilities: Bull 0.3948, Base 0.4981, Stress 0.1071
- Probability drift: Bull -0.0001, Base +0.0001, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
