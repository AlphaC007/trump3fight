# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-24 01:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-23T16:12:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/39984792590
- Most recent run #2: success (schedule) · 2026-10-23T11:01:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/39943213053
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-23T16:12:22Z
- price_usd: 1.790537297737833
- top10_holder_pct: 88.2175
- scenario_probabilities: Bull 0.4795, Base 0.4191, Stress 0.1014
- Probability drift: Bull -0.0016, Base +0.0015, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
