# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-09 12:58
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-09T03:45:49Z · https://github.com/AlphaC007/trump3fight/actions/runs/27182499255
- Most recent run #2: success (schedule) · 2026-06-08T15:34:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/27148698820
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-09T03:45:55Z
- price_usd: 1.6533212765526828
- top10_holder_pct: 88.9737
- scenario_probabilities: Bull 0.4514, Base 0.4845, Stress 0.0641
- Probability drift: Bull -0.0036, Base +0.0007, Stress +0.0029

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
