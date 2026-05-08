# System Health & Data Inspection Report

- Date (UTC+8): 2026-05-08 22:27
- Executive Summary: Core pipeline available; current risk assessment is [Stable].

## 1) Pipeline Health
- Most recent run #1: success (schedule) · 2026-05-08T13:15:11Z · https://github.com/AlphaC007/trump3fight/actions/runs/25557626797
- Most recent run #2: success (schedule) · 2026-05-08T07:28:12Z · https://github.com/AlphaC007/trump3fight/actions/runs/25543038213
- Upstream APIs: CoinGecko/DexScreener normal; on-chain may trigger fallback.

## 2) Data Delta
- as_of_utc: 2026-05-08T13:15:21Z
- price_usd: 2.3802823828177737
- top10_holder_pct: 89.2767
- scenario_probabilities: Bull 0.4559, Base 0.4835, Stress 0.0606
- Probability drift: Bull -0.0666, Base +0.0748, Stress -0.0082

## 3) Falsification Radar
- Trigger A: Data blind spot (missing real-time exchange netflow field)
- Trigger B: Data blind spot (dex_depth_2pct_usd not consistently available)
- Trigger C: Not triggered
- Diamond Hands state: [Stable]

## 4) Risk Flags & Honesty Boundary
- If `using_heuristic_proxy` is active, it must be explicitly disclosed in snapshots.
- This report follows: conclusion first, data-backed evidence, and explicit blind-spot disclosure.
