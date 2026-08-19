# System Health & Data Inspection Report

- Date (UTC+8): 2026-08-19 10:13
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-08-19T01:20:38Z · https://github.com/AlphaC007/trump3fight/actions/runs/32204584781
- Most recent run #2: success (schedule) · 2026-08-18T12:29:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/32137068474
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-08-19T01:20:45Z
- price_usd: 1.4078065221560776
- top10_holder_pct: 87.952
- scenario_probabilities: Bull 0.4522, Base 0.4843, Stress 0.0635
- Probability drift: Bull +0.0060, Base -0.0012, Stress -0.0048

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
