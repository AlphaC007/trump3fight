# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-05 13:10
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-05T04:01:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/26994543590
- Most recent run #2: success (schedule) · 2026-06-04T14:41:30Z · https://github.com/AlphaC007/trump3fight/actions/runs/26958970496
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-05T04:01:26Z
- price_usd: 1.74636349153172
- top10_holder_pct: 89.0481
- scenario_probabilities: Bull 0.4492, Base 0.4849, Stress 0.0659
- Probability drift: Bull +0.0014, Base -0.0003, Stress -0.0011

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
