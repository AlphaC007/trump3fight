# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-18 13:25
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-18T03:46:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/35304472325
- Most recent run #2: success (schedule) · 2026-09-17T15:58:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/35243640398
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-18T03:46:44Z
- price_usd: 2.0429575214250217
- top10_holder_pct: 88.2053
- scenario_probabilities: Bull 0.4434, Base 0.4862, Stress 0.0704
- Probability drift: Bull -0.0027, Base +0.0006, Stress +0.0021

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
