# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-28 11:55
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-28T02:41:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/30323816778
- Most recent run #2: success (schedule) · 2026-07-27T14:14:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/30274104399
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-28T02:41:26Z
- price_usd: 1.5156070917319548
- top10_holder_pct: 88.1798
- scenario_probabilities: Bull 0.4445, Base 0.4859, Stress 0.0696
- Probability drift: Bull -0.0067, Base +0.0014, Stress +0.0053

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
