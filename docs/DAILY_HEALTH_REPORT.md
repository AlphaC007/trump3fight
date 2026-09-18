# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-19 00:45
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-18T15:33:31Z · https://github.com/AlphaC007/trump3fight/actions/runs/35363151793
- Most recent run #2: success (schedule) · 2026-09-18T10:35:46Z · https://github.com/AlphaC007/trump3fight/actions/runs/35335475682
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-18T15:33:37Z
- price_usd: 2.0926184787518194
- top10_holder_pct: 87.8983
- scenario_probabilities: Bull 0.3848, Base 0.4998, Stress 0.1154
- Probability drift: Bull -0.0528, Base +0.0124, Stress +0.0404

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
