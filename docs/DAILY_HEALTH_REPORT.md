# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-28 01:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-27T16:08:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/36332099592
- Most recent run #2: success (schedule) · 2026-09-27T11:25:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/36315689171
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-27T16:08:10Z
- price_usd: 2.1308398801954453
- top10_holder_pct: 88.5414
- scenario_probabilities: Bull 0.4023, Base 0.4965, Stress 0.1012
- Probability drift: Bull -0.0015, Base +0.0003, Stress +0.0012

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
