# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-27 00:33
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-26T14:51:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/26455801502
- Most recent run #2: success (schedule) · 2026-05-26T09:53:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/26445299033
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-26T14:51:08Z
- price_usd: 2.0635517367889755
- top10_holder_pct: 89.145
- scenario_probabilities: Bull 0.4348, Base 0.488, Stress 0.0772
- Probability drift: Bull -0.0072, Base +0.0015, Stress +0.0057

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
