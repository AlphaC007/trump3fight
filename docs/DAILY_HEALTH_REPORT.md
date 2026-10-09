# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-09 15:01
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-09T05:09:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/37887237783
- Most recent run #2: success (schedule) · 2026-10-08T18:14:48Z · https://github.com/AlphaC007/trump3fight/actions/runs/37822781216
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-09T05:09:45Z
- price_usd: 1.8460437455051542
- top10_holder_pct: 88.605
- scenario_probabilities: Bull 0.4838, Base 0.415, Stress 0.1012
- Probability drift: Bull -0.0006, Base +0.0006, Stress +0.0000

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
