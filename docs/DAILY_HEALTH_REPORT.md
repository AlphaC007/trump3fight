# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-02 22:18
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-02T13:04:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/30749145443
- Most recent run #2: success (schedule) · 2026-08-02T08:21:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/30739612940
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-02T13:04:18Z
- price_usd: 1.4460209747179689
- top10_holder_pct: 87.9937
- scenario_probabilities: Bull 0.4327, Base 0.4885, Stress 0.0788
- Probability drift: Bull +0.0040, Base -0.0008, Stress -0.0032

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
