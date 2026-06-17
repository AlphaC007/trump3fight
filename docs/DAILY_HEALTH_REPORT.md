# System Health & Data Inspection Report

- Date (UTC+8): 2026-06-18 00:30
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-06-17T14:56:47Z · https://github.com/AlphaC007/trump3fight/actions/runs/27698253785
- Most recent run #2: success (schedule) · 2026-06-17T10:52:34Z · https://github.com/AlphaC007/trump3fight/actions/runs/27683775747
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-06-17T14:56:56Z
- price_usd: 1.9185159149461593
- top10_holder_pct: 89.0827
- scenario_probabilities: Bull 0.4241, Base 0.4878, Stress 0.0881
- Probability drift: Bull -0.0035, Base -0.0012, Stress +0.0047

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
