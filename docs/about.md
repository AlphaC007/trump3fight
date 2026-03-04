# About The $TRUMP Thesis Lab

## What We Do

The $TRUMP Thesis Lab is a **data-driven research project** focused on analyzing the $TRUMP market structure with transparent, reproducible methods.

- Not investment advice
- Not paid promotion
- Explicitly falsifiable framework

---

## Data Source Architecture (Current)

### 1) Source Priority (TRUMP)

- **Primary:** Binance (`binance-web3` + `TRUMPUSDT` spot anchor)
- **Backup 1:** OKX OnChainOS (`okx-onchainos`)
- **Backup 2:** Bitget Wallet (`bitget-wallet`)

This order is enforced in code and documented in methodology to prevent silent source drift.

### 2) Interpretation Discipline

We use Bull-first interpretation while preserving facts:
- Fact layer is immutable.
- Interpretation is directional but bounded.
- Every conclusion must include an invalidation line.

### 3) Risk Transparency

Every CIO report includes:
- Trigger A/B/C status
- Data quality flags
- Confidence mode based on source quality

---

## Governance Principles

### Data Integrity > Narrative

We prioritize measurable inputs over social hype and disclose blind spots when feeds are unavailable.

### Transparency > Perfection

We version model logic, document assumptions, and keep all key scripts public.

### Human Values > Positions

Beyond models and probabilities, this project is grounded in dignity, care, and gratitude.

---

## Open Source & Auditability

GitHub: [AlphaC007/trump3fight](https://github.com/AlphaC007/trump3fight)

Key artifacts:
- Scenario model: `config/scenario_rules.json`
- Data pipeline: `scripts/`
- Daily reports: `reports/cio_briefings/`
- Agent protocol: `docs/for-agents.md`, `docs/llms.txt`, `docs/agent-index.json`

---

## Contact

- GitHub: [@AlphaC007](https://github.com/AlphaC007)
- X/Twitter: [@GetTrumpMemes](https://twitter.com/GetTrumpMemes)
