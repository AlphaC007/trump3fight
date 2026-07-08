# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-08 12:09
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-08T02:53:00Z · https://github.com/AlphaC007/trump3fight/actions/runs/28913994821
- Most recent run #2: success (schedule) · 2026-07-07T14:12:14Z · https://github.com/AlphaC007/trump3fight/actions/runs/28872906154
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-08T02:53:05Z
- price_usd: 1.6125581435603018
- top10_holder_pct: 88.8833
- scenario_probabilities: Bull 0.4632, Base 0.482, Stress 0.0548
- Probability drift: Bull -0.0602, Base +0.0742, Stress -0.0140

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
