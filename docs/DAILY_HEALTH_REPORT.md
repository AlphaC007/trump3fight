# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-05 00:37
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-04T15:32:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/33890030372
- Most recent run #2: success (schedule) · 2026-09-04T10:36:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/33864064284
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-04T15:32:14Z
- price_usd: 2.2494641319890563
- top10_holder_pct: 88.8681
- scenario_probabilities: Bull 0.4625, Base 0.4821, Stress 0.0554
- Probability drift: Bull +0.0131, Base -0.0028, Stress -0.0103

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
