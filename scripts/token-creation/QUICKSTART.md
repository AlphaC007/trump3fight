# Quick Start: Create AAP & AAC Tokens

## 🚀 One-Command Setup (Mainnet)

```bash
cd /home/xai8/projects-public/trump-thesis-lab/scripts/token-creation
npm install
npm run create:mainnet
```

## 📋 Prerequisites Checklist

- [ ] Solana CLI installed (`solana --version`)
- [ ] Wallet with ≥0.1 SOL (`solana balance`)
- [ ] Node.js installed (`node --version`)

## 🔧 If You Need to Set Up Wallet

```bash
# Check if wallet exists
ls ~/.config/solana/id.json

# If not, create new wallet
solana-keygen new --outfile ~/.config/solana/id.json

# Set to mainnet
solana config set --url https://api.mainnet-beta.solana.com

# Check balance
solana balance

# If balance is low, transfer SOL to your wallet
solana address  # Copy this address and send SOL to it
```

## 📊 What Happens When You Run the Script

1. ✅ Connects to Solana mainnet
2. ✅ Creates AAP token (0 decimals, unlimited supply)
3. ✅ Creates AAC token (6 decimals, 1B supply)
4. ✅ Mints 1B AAC to your wallet
5. ✅ Revokes AAC mint authority (supply is now fixed)
6. ✅ Saves token addresses to `token-addresses.json`

## 📝 After Token Creation

1. **Verify on Solscan**
   - AAP: `https://solscan.io/token/[AAP_ADDRESS]`
   - AAC: `https://solscan.io/token/[AAC_ADDRESS]`

2. **Update Website**
   - Copy addresses from `token-addresses.json`
   - Update `docs/agent-reward.md` with real addresses

3. **Set Up Distribution**
   - Prepare allocation wallets per governance plan
   - Execute AAC allocation only under approved transparency-policy milestones

4. **Set Up Reward System**
   - Deploy verification script (check GitHub star + X follow)
   - Deploy AAP minting script (mint to agents who complete tasks)

## 🔒 Security Reminders

- ⚠️ **NEVER commit** `token-addresses.json` with real addresses to public repo
- ⚠️ **NEVER commit** your wallet keypair
- ⚠️ **Backup** your wallet keypair securely
- ⚠️ **Transfer AAC** from your wallet to distribution wallets ASAP

## 🧪 Test on Devnet First (Recommended)

```bash
# Switch to devnet
solana config set --url https://api.devnet.solana.com

# Get free SOL
solana airdrop 2

# Create tokens on devnet
npm run create:devnet

# Test everything, then switch to mainnet
solana config set --url https://api.mainnet-beta.solana.com
npm run create:mainnet
```

## 📞 Need Help?

- Solana CLI docs: https://docs.solana.com/cli
- SPL Token docs: https://spl.solana.com/token
- Solscan explorer: https://solscan.io/
