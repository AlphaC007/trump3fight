# System Health & Data Inspection Report

- Date (UTC+8): 2026-04-25 21:54
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-04-25T12:45:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/24931211746
- Most recent run #2: success (schedule) · 2026-04-25T07:14:06Z · https://github.com/AlphaC007/trump3fight/actions/runs/24925470860
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-04-25T12:45:23Z
- price_usd: 2.5402034179591153
- top10_holder_pct: 89.0124
- scenario_probabilities: Bull 0.5291, Base 0.4023, Stress 0.0686
- Probability drift: Bull +0.0011, Base -0.0010, Stress -0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
