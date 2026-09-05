# System Health & Data Inspection Report

- Date (UTC+8): 2026-09-05 13:06
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-09-05T03:31:19Z · https://github.com/AlphaC007/trump3fight/actions/runs/33942082093
- Most recent run #2: success (schedule) · 2026-09-04T15:32:08Z · https://github.com/AlphaC007/trump3fight/actions/runs/33890030372
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-09-05T03:31:24Z
- price_usd: 2.3305949863293236
- top10_holder_pct: 88.8982
- scenario_probabilities: Bull 0.4554, Base 0.4837, Stress 0.0609
- Probability drift: Bull -0.0071, Base +0.0016, Stress +0.0055

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
