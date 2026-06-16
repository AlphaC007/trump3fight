# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-17 01:51
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-16T16:27:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/27632436397
- Most recent run #2: success (schedule) · 2026-06-16T11:07:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/27613220011
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-16T16:28:02Z
- price_usd: 1.9023193261322786
- top10_holder_pct: 89.0338
- scenario_probabilities: Bull 0.4576, Base 0.4832, Stress 0.0592
- Probability drift: Bull -0.0028, Base +0.0006, Stress +0.0022

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
