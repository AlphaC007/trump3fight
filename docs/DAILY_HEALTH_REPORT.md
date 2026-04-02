# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-02 11:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-02T02:35:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/23880932633
- Most recent run #2: success (schedule) · 2026-04-01T13:02:37Z · https://github.com/AlphaC007/trump3fight/actions/runs/23849970425
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-02T02:35:13Z
- price_usd: 2.88722455820655
- top10_holder_pct: 88.3064
- scenario_probabilities: Bull 0.4377, Base 0.4874, Stress 0.0749
- Probability drift: Bull -0.0052, Base +0.0011, Stress +0.0041

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
