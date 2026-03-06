# Methodology

## Scope
This framework tracks market structure, liquidity health, concentration risk, and narrative velocity.

## Evidence Standard
Each claim should include:

- Evidence: source id(s)
- Confidence: low/medium/high
- Last-Updated: YYYY-MM-DD

## Falsifiability
Any scenario probability upgrade must be triggered by explicit thresholds defined in `scenario_matrix.md`.

## Interpretation Protocol
This repository uses a structured interpretation policy documented in `docs/analytical_framework.md`:

- Fact layer is immutable.
- Interpretation layer is Bull-First by strategy.
- Conclusion layer must always include:

  - Bull Entry Thesis
  - Hold-Confidence Reinforcement
  - Invalidation Line

## Data Source Priority Policy (TRUMP)
To prevent silent source drift, the repository enforces this source order:

1. **Primary:** Binance (`binance-web3`, with `TRUMPUSDT` spot anchor)
2. **Backup 1:** OKX OnChainOS (`okx-onchainos`)
3. **Backup 2:** Bitget Wallet (`bitget-wallet`)

Implementation touchpoints:

- `scripts/build_snapshot.py` (snapshot fields and holder concentration source)
- `scripts/generate_report.py` (Primary/Backup sections in CIO report)
- `docs/data_dictionary.md` (source id definitions)
