# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-03 11:41
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-03T02:36:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/23931268744
- Most recent run #2: success (schedule) · 2026-04-02T12:55:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/23901452447
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-03T02:36:47Z
- price_usd: 2.821955114181737
- top10_holder_pct: 88.3096
- scenario_probabilities: Bull 0.4467, Base 0.4855, Stress 0.0678
- Probability drift: Bull +0.0084, Base -0.0017, Stress -0.0067

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
