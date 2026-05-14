# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-14 12:37
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-14T03:38:55Z · https://github.com/AlphaC007/trump3fight/actions/runs/25840226645
- Most recent run #2: success (schedule) · 2026-05-13T14:11:52Z · https://github.com/AlphaC007/trump3fight/actions/runs/25804637781
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-14T03:39:01Z
- price_usd: 2.3472267645756757
- top10_holder_pct: 89.1008
- scenario_probabilities: Bull 0.5227, Base 0.4085, Stress 0.0688
- Probability drift: Bull -0.0028, Base +0.0027, Stress +0.0001

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
