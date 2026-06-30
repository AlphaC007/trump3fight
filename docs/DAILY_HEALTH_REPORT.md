# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-30 23:21
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-30T14:02:04Z · https://github.com/AlphaC007/trump3fight/actions/runs/28450208625
- Most recent run #2: success (schedule) · 2026-06-30T09:31:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/28434539651
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-30T14:02:11Z
- price_usd: 1.6419413980531765
- top10_holder_pct: 88.3306
- scenario_probabilities: Bull 0.4551, Base 0.4837, Stress 0.0612
- Probability drift: Bull -0.0015, Base +0.0003, Stress +0.0012

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
