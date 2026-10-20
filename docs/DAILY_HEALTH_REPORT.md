# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-20 13:34
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-20T03:57:59Z · https://github.com/AlphaC007/trump3fight/actions/runs/39367044147
- Most recent run #2: success (schedule) · 2026-10-19T18:04:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/39299490180
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-20T03:58:05Z
- price_usd: 1.700408677343252
- top10_holder_pct: 88.1779
- scenario_probabilities: Bull 0.4077, Base 0.4954, Stress 0.0969
- Probability drift: Bull +0.0060, Base -0.0013, Stress -0.0047

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
