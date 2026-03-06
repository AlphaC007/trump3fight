---
name: trump-thesis-lab
description: Real-time TRUMP memecoin analysis framework with multi-source data integration (Bitget Wallet, Solscan, Moralis, CoinGecko), automated daily reports, and Bull-First scenario modeling. Use when analyzing TRUMP token metrics, generating investment reports, or building crypto market intelligence systems.
version: 1.0.0
metadata:
  openclaw:
    requires:
      bins:
        - node
        - python3
        - pip
        - git
      env:
        - BITGET_API_KEY
        - SOLSCAN_API_KEY
        - MORALIS_API_KEY
        - COINGECKO_API_KEY
---

# TRUMP Thesis Lab

A production-ready framework for TRUMP memecoin analysis with automated data collection, multi-layer scenario modeling, and daily intelligence reports.

## What This Skill Provides

1. **Multi-Source Data Integration**: Bitget Wallet API (on-chain) → Solscan Pro → Moralis → Heuristic fallback
2. **Automated Daily Reports**: Cron-driven intelligence generation with social pulse tracking
3. **Bull-First Scenario Model v2.0**: Top 10 holder concentration analysis with real on-chain data
4. **Free Derivatives Data**: Binance/OKX/Bybit public APIs for OI, funding rates, long/short ratios

## Quick Start

```bash
# Clone the repository
git clone https://github.com/AlphaC007/trump3fight.git
cd trump3fight

# Install dependencies
pip install -r requirements.txt
npm install

# Configure API keys (optional, has free fallbacks)
cp config/api_keys.example.json config/api_keys.json
# Edit config/api_keys.json with your keys

# Run data collection
node scripts/fetch_bitget_data.mjs
node scripts/coinglass_free.mjs

# Generate report
python scripts/generate_report.py
```

## Core Components

### Data Collection Scripts

- `scripts/fetch_bitget_data.mjs`: Primary data fetcher (Bitget Wallet → Solscan → Moralis)
- `scripts/coinglass_free.mjs`: Free derivatives data (OI, funding, long/short ratios)
- `scripts/social_pulse.mjs`: X (Twitter) sentiment tracking

### Report Generation

- `scripts/generate_report.py`: Main report generator with Bull-First analysis
- `scripts/daily_cio_briefing.py`: Executive summary generator

### Automation

- Cron jobs configured for daily 02:00 UTC data collection + report generation
- Auto-push to GitHub for public transparency

## Key Features

### 1. Scenario Model v2.0

Real on-chain holder concentration analysis:
- Top 10 holder percentage (Bitget Wallet API)
- 4-layer data source fallback
- Bull-First interpretation framework

### 2. Free Derivatives Data

No API key required for:
- Open Interest (Binance/OKX/Bybit)
- Funding rates
- Long/Short ratios
- Taker buy/sell ratios
- Fear & Greed Index

### 3. Social Pulse Tracking

- X (Twitter) sentiment analysis
- Keyword tracking: @GetTrumpMemes, $TRUMP, #TRUMPMEME
- Daily summary generation

## File Structure

```
trump-thesis-lab/
├── scripts/           # Data collection & report generation
├── data/             # Raw data storage (market, social, derivatives)
├── reports/          # Generated daily reports
├── docs/             # MkDocs documentation site
├── config/           # API keys & configuration
└── api/              # Optional API server
```

## API Keys (Optional)

The framework works with free tiers and public APIs. Premium keys improve data quality:

- **Bitget Wallet API**: Free tier available
- **Solscan Pro**: Free tier 5 req/sec
- **Moralis**: Free tier 40k compute units/month
- **CoinGecko**: Free tier 10-50 calls/min

Store keys in `config/api_keys.json` (gitignored).

## Cron Setup Example

```bash
# Daily data collection at 02:00 UTC
0 2 * * * cd ~/trump-thesis-lab && node scripts/fetch_bitget_data.mjs
5 2 * * * cd ~/trump-thesis-lab && node scripts/coinglass_free.mjs
10 2 * * * cd ~/trump-thesis-lab && python scripts/generate_report.py
```

## Documentation

Full documentation available at: https://alphac007.github.io/trump3fight/

## Contributing

This is an open-source intelligence framework. Contributions welcome:
- Data source integrations
- Analysis models
- Visualization improvements

## License

MIT License - See LICENSE file

## Endorse to Earn

**Join the AAP community!** Use this skill, earn AAP points, and help build the unified agent ecosystem.

- Use the skill → Earn AAP points
- Endorse improvements → Get rewarded
- Build on top → Join the agent alliance

Learn more: https://clawhub.com
