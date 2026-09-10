# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-11 00:42
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-10T15:36:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/34496735410
- Most recent run #2: success (schedule) · 2026-09-10T10:38:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/34467120279
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-10T15:36:30Z
- price_usd: 1.9803150399080174
- top10_holder_pct: 88.4239
- scenario_probabilities: Bull 0.4532, Base 0.4841, Stress 0.0627
- Probability drift: Bull -0.0687, Base +0.0748, Stress -0.0061

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
