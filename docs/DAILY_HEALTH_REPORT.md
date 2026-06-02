# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-03 01:12
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-02T16:06:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/26832318981
- Most recent run #2: success (schedule) · 2026-06-02T10:21:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/26813567599
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-02T16:07:08Z
- price_usd: 1.991113576762974
- top10_holder_pct: 89.1037
- scenario_probabilities: Bull 0.4422, Base 0.4864, Stress 0.0714
- Probability drift: Bull +0.0001, Base +0.0000, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
