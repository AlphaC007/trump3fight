# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-13 15:29
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-13T05:39:02Z · https://github.com/AlphaC007/trump3fight/actions/runs/43373399116
- Most recent run #2: success (schedule) · 2026-11-12T19:23:01Z · https://github.com/AlphaC007/trump3fight/actions/runs/43289592537
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-13T05:39:07Z
- price_usd: 1.0591639921048783
- top10_holder_pct: 88.4737
- scenario_probabilities: Bull 0.3865, Base 0.4998, Stress 0.1137
- Probability drift: Bull -0.0118, Base +0.0025, Stress +0.0093

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
