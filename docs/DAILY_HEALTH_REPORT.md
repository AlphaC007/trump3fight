# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-03 13:22
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-03T03:31:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/33711673920
- Most recent run #2: success (schedule) · 2026-09-02T15:43:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/33650423549
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-03T03:31:36Z
- price_usd: 2.2505961660233678
- top10_holder_pct: 88.6629
- scenario_probabilities: Bull 0.4559, Base 0.4835, Stress 0.0606
- Probability drift: Bull -0.0665, Base +0.0747, Stress -0.0082

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
