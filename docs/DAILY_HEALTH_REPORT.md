# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-28 20:23
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-28T10:12:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/33162470637
- Most recent run #2: success (schedule) · 2026-08-27T21:31:24Z · https://github.com/AlphaC007/trump3fight/actions/runs/33118531189
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-28T10:12:37Z
- price_usd: 2.677806544938701
- top10_holder_pct: 89.6442
- scenario_probabilities: Bull 0.4498, Base 0.4848, Stress 0.0654
- Probability drift: Bull +0.0046, Base -0.0010, Stress -0.0036

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
