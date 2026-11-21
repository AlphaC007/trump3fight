# System Health & Data Inspection Report

- Date (UTC+8): 2026-11-21 15:53
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-11-21T06:05:27Z · https://github.com/AlphaC007/trump3fight/actions/runs/44873884859
- Most recent run #2: success (schedule) · 2026-11-20T19:28:29Z · https://github.com/AlphaC007/trump3fight/actions/runs/44802451589
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-11-21T06:05:32Z
- price_usd: 0.8143211675110428
- top10_holder_pct: 88.3386
- scenario_probabilities: Bull 0.4465, Base 0.4855, Stress 0.068
- Probability drift: Bull +0.0420, Base -0.0105, Stress -0.0315

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
