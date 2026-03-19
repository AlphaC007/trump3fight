# System Health & Data Inspection Report

- Date (UTC+8): 2026-03-19 23:39
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-03-19T14:38:40Z · https://github.com/AlphaC007/trump3fight/actions/runs/23300321416
- Most recent run #2: success (schedule) · 2026-03-19T08:00:15Z · https://github.com/AlphaC007/trump3fight/actions/runs/23285351868
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-03-19T14:38:46Z
- price_usd: 3.3663569004386873
- top10_holder_pct: 88.7131
- scenario_probabilities: Bull 0.4742, Base 0.4435, Stress 0.0823
- Probability drift: Bull +0.0024, Base +0.0008, Stress -0.0032

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
