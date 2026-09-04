# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-04 13:16
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-04T03:30:21Z · https://github.com/AlphaC007/trump3fight/actions/runs/33833446794
- Most recent run #2: success (schedule) · 2026-09-03T15:33:51Z · https://github.com/AlphaC007/trump3fight/actions/runs/33773352321
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-04T03:30:30Z
- price_usd: 2.3802714814512065
- top10_holder_pct: 88.8172
- scenario_probabilities: Bull 0.4463, Base 0.4856, Stress 0.0681
- Probability drift: Bull -0.0007, Base +0.0002, Stress +0.0005

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
