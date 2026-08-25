# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-25 10:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-25T01:20:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/32797188913
- Most recent run #2: failure (schedule) · 2026-08-24T12:32:36Z · https://github.com/AlphaC007/trump3fight/actions/runs/32727646784
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-25T01:21:03Z
- price_usd: 2.460726099696216
- top10_holder_pct: 89.2498
- scenario_probabilities: Bull 0.4494, Base 0.4849, Stress 0.0657
- Probability drift: Bull +0.0067, Base -0.0014, Stress -0.0053

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
