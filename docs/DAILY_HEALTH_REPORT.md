# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-27 12:44
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-27T03:40:13Z · https://github.com/AlphaC007/trump3fight/actions/runs/28277522570
- Most recent run #2: success (schedule) · 2026-06-26T14:07:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/28243333978
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-27T03:40:21Z
- price_usd: 1.7132458215766115
- top10_holder_pct: 88.7759
- scenario_probabilities: Bull 0.462, Base 0.4822, Stress 0.0558
- Probability drift: Bull +0.0058, Base -0.0013, Stress -0.0045

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
