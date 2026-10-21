# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-22 01:41
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-21T16:22:54Z · https://github.com/AlphaC007/trump3fight/actions/runs/39634248347
- Most recent run #2: success (schedule) · 2026-10-21T11:11:33Z · https://github.com/AlphaC007/trump3fight/actions/runs/39590112573
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-21T16:23:01Z
- price_usd: 1.876458150605293
- top10_holder_pct: 88.183
- scenario_probabilities: Bull 0.4164, Base 0.4936, Stress 0.09
- Probability drift: Bull -0.0657, Base +0.0770, Stress -0.0113

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
