# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-12 23:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-12T14:02:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/25739554309
- Most recent run #2: success (schedule) · 2026-05-12T08:37:42Z · https://github.com/AlphaC007/trump3fight/actions/runs/25723269223
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-12T14:02:47Z
- price_usd: 2.32717059018166
- top10_holder_pct: 89.1592
- scenario_probabilities: Bull 0.4405, Base 0.4868, Stress 0.0727
- Probability drift: Bull +0.0050, Base -0.0010, Stress -0.0040

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
