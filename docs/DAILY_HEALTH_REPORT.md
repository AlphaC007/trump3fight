# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-06 23:02
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-06T13:45:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/31107467501
- Most recent run #2: success (schedule) · 2026-08-06T08:32:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/31085317695
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-06T13:45:58Z
- price_usd: 1.4497321696181233
- top10_holder_pct: 87.9307
- scenario_probabilities: Bull 0.4525, Base 0.4843, Stress 0.0632
- Probability drift: Bull +0.0008, Base -0.0001, Stress -0.0007

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
