# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-09 22:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-09T12:59:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/25601739195
- Most recent run #2: success (schedule) · 2026-05-09T07:54:18Z · https://github.com/AlphaC007/trump3fight/actions/runs/25595860869
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-09T12:59:47Z
- price_usd: 2.47035921475862
- top10_holder_pct: 89.3844
- scenario_probabilities: Bull 0.4354, Base 0.4878, Stress 0.0768
- Probability drift: Bull -0.0041, Base +0.0008, Stress +0.0033

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
