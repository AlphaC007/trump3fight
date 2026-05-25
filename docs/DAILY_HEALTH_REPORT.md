# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-25 13:15
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-25T04:04:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/26382583577
- Most recent run #2: success (schedule) · 2026-05-24T13:06:53Z · https://github.com/AlphaC007/trump3fight/actions/runs/26362092500
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-25T04:04:36Z
- price_usd: 2.061452084483753
- top10_holder_pct: 89.1382
- scenario_probabilities: Bull 0.4238, Base 0.4877, Stress 0.0885
- Probability drift: Bull -0.0170, Base +0.0010, Stress +0.0160

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
