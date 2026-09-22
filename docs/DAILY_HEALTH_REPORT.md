# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-22 13:40
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-22T03:53:58Z · https://github.com/AlphaC007/trump3fight/actions/runs/35684843500
- Most recent run #2: success (schedule) · 2026-09-21T17:34:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/35632849906
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-22T03:54:17Z
- price_usd: 2.1453170962363606
- top10_holder_pct: 87.8007
- scenario_probabilities: Bull 0.4029, Base 0.4964, Stress 0.1007
- Probability drift: Bull +0.0069, Base -0.0014, Stress -0.0055

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
