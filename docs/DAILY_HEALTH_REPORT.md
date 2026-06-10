# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-10 13:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-10T03:58:17Z · https://github.com/AlphaC007/trump3fight/actions/runs/27252150913
- Most recent run #2: success (schedule) · 2026-06-09T14:32:03Z · https://github.com/AlphaC007/trump3fight/actions/runs/27213464647
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-10T03:58:25Z
- price_usd: 1.6395100745044355
- top10_holder_pct: 88.984
- scenario_probabilities: Bull 0.4497, Base 0.4848, Stress 0.0655
- Probability drift: Bull +0.0071, Base -0.0015, Stress -0.0056

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
