# Solana Pay Reward System - Setup Guide

## Architecture Overview

```
┌─────────────┐
│   Agent     │
│  (Browser)  │
└──────┬──────┘
       │ 1. Submit address
       ↓
┌─────────────────────┐
│  generate-challenge │ ← Check: already claimed? IP limit? Daily limit?
│      (API)          │ → Return: question + challengeId + instructions
└─────────────────────┘
       │
       │ 2. Agent sends 0 SOL tx with memo
       ↓
┌─────────────────────┐
│ Solana Blockchain   │
└──────┬──────────────┘
       │ 3. Monitor transactions
       ↓
┌─────────────────────┐
│ verify-and-reward   │ ← Parse memo, verify answer
│    (Background)     │ → Send 0.0001 USDC reward
└─────────────────────┘
```

## Prerequisites

1. **Node.js** (v18+)
2. **Solana wallet** with:
   - Some SOL for gas fees (~0.01 SOL)
   - USDC balance for rewards (e.g., 0.01 USDC = 100 rewards)
3. **Solana CLI** (optional, for wallet management)

## Installation

```bash
cd /home/xai8/projects-public/trump-thesis-lab

# Install dependencies
npm install @solana/web3.js @solana/spl-token

# Or if you don't have package.json yet:
npm init -y
npm install @solana/web3.js @solana/spl-token
```

## Configuration

### 1. Set up environment variables

Create `.env` file in project root:

```bash
# Your Solana wallet address (receives zero transactions)
REWARD_WALLET=YOUR_SOLANA_WALLET_ADDRESS

# Your wallet private key (base64 encoded, for sending rewards)
SOLANA_PRIVATE_KEY=YOUR_BASE64_PRIVATE_KEY

# Solana RPC endpoint (optional, defaults to public mainnet)
SOLANA_RPC=https://api.mainnet-beta.solana.com
```

### 2. Get your private key (base64)

```bash
# If you have a keypair JSON file:
cat ~/.config/solana/id.json | jq -r 'map(tostring) | join(",")' | base64

# Or use Solana CLI:
solana-keygen pubkey ~/.config/solana/id.json  # Get public key
```

**⚠️ SECURITY WARNING:**
- Never commit `.env` to git
- Add `.env` to `.gitignore`
- Keep private key secure

### 3. Fund your wallet

```bash
# Check balance
solana balance

# You need:
# - ~0.01 SOL for gas fees
# - USDC for rewards (0.0001 USDC × expected claims)

# Get USDC address:
spl-token accounts EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
```

## Usage

### Start the reward monitor (background service)

```bash
# Test mode (dry run)
node api/reward/verify-and-reward.js

# Production (run in background)
nohup node api/reward/verify-and-reward.js > logs/reward-monitor.log 2>&1 &

# Or use PM2 (recommended)
npm install -g pm2
pm2 start api/reward/verify-and-reward.js --name reward-monitor
pm2 logs reward-monitor
```

### Test the challenge generation

```bash
# Generate a test challenge
node api/reward/generate-challenge.js DemoAddressForTesting123456789012345

# Expected output:
# {
#   "challengeId": "abc123...",
#   "question": "What is the primary data source...",
#   "instructions": { ... }
# }
```

### Set up the web endpoint

You need a simple HTTP server to handle `/api/reward/challenge` POST requests.

**Option A: Express.js (recommended)**

Create `api/server.js`:

```javascript
const express = require('express');
const { handleRequest } = require('./reward/generate-challenge');

const app = express();
app.use(express.json());

app.post('/api/reward/challenge', (req, res) => {
  req.body.ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  handleRequest(req, res);
});

app.listen(3000, () => {
  console.log('Reward API listening on port 3000');
});
```

Run: `node api/server.js`

**Option B: GitHub Pages + Netlify Functions**

Deploy `generate-challenge.js` as a serverless function.

## Monitoring

### Check claims

```bash
# View all claims
cat data/reward-claims/claimed.json | jq

# Count today's claims
cat data/reward-claims/claimed.json | jq '[.[] | select(.date == "'$(date +%Y-%m-%d)'")]' | jq length

# Check IP limits
cat data/reward-claims/ip-limits.json | jq
```

### View logs

```bash
# If using PM2
pm2 logs reward-monitor

# If using nohup
tail -f logs/reward-monitor.log
```

## Troubleshooting

### "Invalid Solana address"
- Address must be 32-44 characters, base58 encoded
- Test with: `solana-keygen verify <address> <pubkey-file>`

### "Failed to send reward"
- Check USDC balance: `spl-token balance EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
- Check SOL balance for gas: `solana balance`
- Verify private key is correct

### "Challenge not found"
- Challenges expire after 10 minutes
- Check `data/reward-claims/challenges.json`

### "Address already claimed"
- Each address can only claim once
- Check `data/reward-claims/claimed.json`

## Security Checklist

- [ ] `.env` is in `.gitignore`
- [ ] Private key is never logged or exposed
- [ ] API endpoint has rate limiting
- [ ] Monitor for suspicious patterns (many claims from same IP)
- [ ] Set up alerts for low USDC balance
- [ ] Regularly review `claimed.json` for abuse

## Cost Estimation

- Gas per reward: ~0.000005 SOL (~$0.0001)
- Reward amount: 0.0001 USDC
- Total per claim: ~$0.0002

For 50 claims/day:
- Daily cost: ~$0.01
- Monthly cost: ~$0.30

## Next Steps

1. Test with a few manual claims
2. Monitor for 24 hours
3. Adjust daily limit based on demand
4. Consider adding more verification questions
5. Set up automated balance alerts

## Support

If you encounter issues:
1. Check logs first
2. Verify environment variables
3. Test with Solana devnet first
4. Review transaction on Solscan
