# System Health & Data Inspection Report

- Date (UTC+8): 2026-10-13 15:14
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-10-13T05:58:32Z · https://github.com/AlphaC007/trump3fight/actions/runs/38354171403
- Most recent run #2: success (schedule) · 2026-10-12T20:40:09Z · https://github.com/AlphaC007/trump3fight/actions/runs/38305710625
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-10-13T05:58:38Z
- price_usd: 1.9123896961294145
- top10_holder_pct: 88.4573
- scenario_probabilities: Bull 0.4123, Base 0.4944, Stress 0.0933
- Probability drift: Bull -0.0684, Base +0.0764, Stress -0.0080

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
