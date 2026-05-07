# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-07 12:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-07T03:27:20Z · https://github.com/AlphaC007/trump3fight/actions/runs/25474403828
- Most recent run #2: success (schedule) · 2026-05-06T13:49:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/25439411749
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-07T03:27:26Z
- price_usd: 2.3316120150546733
- top10_holder_pct: 89.1393
- scenario_probabilities: Bull 0.4494, Base 0.4849, Stress 0.0657
- Probability drift: Bull -0.0076, Base +0.0016, Stress +0.0060

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
