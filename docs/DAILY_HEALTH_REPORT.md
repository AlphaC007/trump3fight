# System Health & Data Inspection Report

- Date (UTC+8): 2026-07-14 22:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-07-14T13:15:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/29335735548
- Most recent run #2: success (schedule) · 2026-07-14T08:00:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/29316509367
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-07-14T13:15:40Z
- price_usd: 1.543530282264869
- top10_holder_pct: 88.8664
- scenario_probabilities: Bull 0.4452, Base 0.4858, Stress 0.069
- Probability drift: Bull -0.0078, Base +0.0017, Stress +0.0061

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
