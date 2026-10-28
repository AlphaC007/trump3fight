# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-29 02:31
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-28T17:43:45Z · https://github.com/AlphaC007/trump3fight/actions/runs/40738454435
- Most recent run #2: success (schedule) · 2026-10-28T12:08:05Z · https://github.com/AlphaC007/trump3fight/actions/runs/40685341602
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-28T17:44:00Z
- price_usd: 1.700574677650435
- top10_holder_pct: 88.1476
- scenario_probabilities: Bull 0.3943, Base 0.4982, Stress 0.1075
- Probability drift: Bull -0.0003, Base +0.0001, Stress +0.0002

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
