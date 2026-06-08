# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-08 13:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-08T04:15:50Z · https://github.com/AlphaC007/trump3fight/actions/runs/27115648740
- Most recent run #2: success (schedule) · 2026-06-07T13:25:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/27093869035
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-08T04:15:55Z
- price_usd: 1.650122103477308
- top10_holder_pct: 88.9827
- scenario_probabilities: Bull 0.4371, Base 0.4875, Stress 0.0754
- Probability drift: Bull -0.0053, Base +0.0011, Stress +0.0042

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
