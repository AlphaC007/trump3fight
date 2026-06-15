# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-15 14:17
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-15T04:43:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/27524529838
- Most recent run #2: success (schedule) · 2026-06-14T13:45:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/27500781678
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-15T04:43:19Z
- price_usd: 2.0464873442763905
- top10_holder_pct: 89.0797
- scenario_probabilities: Bull 0.4251, Base 0.4881, Stress 0.0868
- Probability drift: Bull +0.0023, Base +0.0007, Stress -0.0030

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
