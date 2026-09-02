# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-03 00:52
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-02T15:43:43Z · https://github.com/AlphaC007/trump3fight/actions/runs/33650423549
- Most recent run #2: success (schedule) · 2026-09-02T10:39:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/33620593695
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-02T15:43:52Z
- price_usd: 2.194374597978255
- top10_holder_pct: 88.2699
- scenario_probabilities: Bull 0.5224, Base 0.4088, Stress 0.0688
- Probability drift: Bull +0.0889, Base -0.0795, Stress -0.0094

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
