# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-21 13:03
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-21T03:59:23Z · https://github.com/AlphaC007/trump3fight/actions/runs/26204581566
- Most recent run #2: success (schedule) · 2026-05-20T14:43:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/26170052087
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-21T03:59:29Z
- price_usd: 2.0572225652550302
- top10_holder_pct: 89.1322
- scenario_probabilities: Bull 0.4275, Base 0.489, Stress 0.0835
- Probability drift: Bull -0.0023, Base -0.0001, Stress +0.0024

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
