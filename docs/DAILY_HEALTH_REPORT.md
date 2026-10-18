# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-18 13:17
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-18T03:36:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/39094236565
- Most recent run #2: success (schedule) · 2026-10-17T14:44:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/39042061233
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-18T03:36:52Z
- price_usd: 1.7585184134275011
- top10_holder_pct: 88.1298
- scenario_probabilities: Bull 0.4797, Base 0.4189, Stress 0.1014
- Probability drift: Bull +0.0628, Base -0.0746, Stress +0.0118

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
