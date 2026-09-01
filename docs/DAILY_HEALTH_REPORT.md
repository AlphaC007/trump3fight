# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-02 00:59
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-01T15:51:12Z · https://github.com/AlphaC007/trump3fight/actions/runs/33528287096
- Most recent run #2: success (schedule) · 2026-09-01T11:07:10Z · https://github.com/AlphaC007/trump3fight/actions/runs/33500834875
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-01T15:51:22Z
- price_usd: 2.376606343561153
- top10_holder_pct: 88.4203
- scenario_probabilities: Bull 0.4316, Base 0.4887, Stress 0.0797
- Probability drift: Bull +0.0008, Base -0.0001, Stress -0.0007

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
