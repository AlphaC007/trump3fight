# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-15 21:19
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-15T12:21:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/31884380857
- Most recent run #2: success (schedule) · 2026-08-15T06:34:22Z · https://github.com/AlphaC007/trump3fight/actions/runs/31869780482
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-15T12:21:20Z
- price_usd: 1.4090870182091053
- top10_holder_pct: 87.9186
- scenario_probabilities: Bull 0.4289, Base 0.4892, Stress 0.0819
- Probability drift: Bull -0.0086, Base +0.0018, Stress +0.0068

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
