# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-31 02:16
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-30T17:32:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/41099728837
- Most recent run #2: success (schedule) · 2026-10-30T12:09:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/41053187679
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-30T17:32:43Z
- price_usd: 1.5679271914297983
- top10_holder_pct: 88.5793
- scenario_probabilities: Bull 0.4166, Base 0.4936, Stress 0.0898
- Probability drift: Bull -0.0618, Base +0.0734, Stress -0.0116

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
