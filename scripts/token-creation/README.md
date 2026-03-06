# Token Creation Guide

This directory contains scripts to create AAP and AAC tokens on Solana.

## Prerequisites

1. **Solana CLI installed**
   ```bash
   sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
   ```

2. **Node.js dependencies**
   ```bash
   npm install @solana/web3.js @solana/spl-token
   ```

3. **Solana wallet with SOL**
   - Mainnet: Need ~0.1 SOL for token creation
   - Devnet: Get free SOL from faucet

4. **Set up wallet**
   ```bash
   # Generate new wallet (or use existing)
   solana-keygen new --outfile ~/.config/solana/id.json
   
   # Check balance
   solana balance
   
   # If on devnet, get free SOL
   solana airdrop 2
   ```

## Token Specifications

### AAP (Agent Alpha Points)
- **Type**: Solana SPL Token
- **Decimals**: 0 (integer points)
- **Supply**: Unlimited (minted as needed)
- **Mint Authority**: Your wallet (can mint more)
- **Freeze Authority**: Your wallet (can freeze malicious accounts)
- **Transferability**: Restricted (implement transfer restrictions)

### AAC (Agent Alpha Coin)
- **Type**: Solana SPL Token
- **Decimals**: 6 (standard)
- **Supply**: 1,000,000,000 AAC (1 billion, fixed)
- **Mint Authority**: Revoked (supply is fixed)
- **Freeze Authority**: None (fully decentralized)
- **Transferability**: Fully open

## Usage

### Step 1: Create Tokens

```bash
# For mainnet
export SOLANA_RPC=https://api.mainnet-beta.solana.com
node create-tokens.js

# For devnet (testing)
export SOLANA_RPC=https://api.devnet.solana.com
node create-tokens.js
```

### Step 2: Verify Creation

The script will output:
- AAP mint address
- AAC mint address
- Token info saved to `token-addresses.json`

Example output:
```
=== Creating AAP (Agent Alpha Points) ===
✅ AAP Mint Address: ABC123...
   - Decimals: 0
   - Mint Authority: Your wallet
   - Freeze Authority: Your wallet
   - Supply: Unlimited

=== Creating AAC (Agent Alpha Coin) ===
✅ AAC Mint Address: XYZ789...
   - Decimals: 6
   - Freeze Authority: None
✅ Minted 1,000,000,000 AAC
✅ Mint authority revoked (supply is now fixed)
```

### Step 3: Verify on Solscan

- AAP: `https://solscan.io/token/[AAP_MINT_ADDRESS]`
- AAC: `https://solscan.io/token/[AAC_MINT_ADDRESS]`

### Step 4: Update Documentation

Update `docs/agent-reward.md` with the token addresses:
```markdown
- AAP Token: [ABC123...](https://solscan.io/token/ABC123...)
- AAC Token: [XYZ789...](https://solscan.io/token/XYZ789...)
```

## Token Distribution

### AAP Distribution
AAP is minted on-demand when agents complete tasks:
1. Agent completes endorsement task
2. Verification script checks GitHub star + X follow
3. Script mints AAP to agent's wallet
4. Transaction recorded on-chain

### AAC Distribution
AAC is pre-minted (1B total). Allocation details are managed under transparency-policy compliance and disclosed by milestone.

**Next step**: Maintain auditable allocation records and execute distribution only through approved governance flow.

## Security Considerations

1. **AAP Mint Authority**: Keep private key secure. This can mint unlimited AAP.
2. **AAP Freeze Authority**: Can freeze malicious accounts. Use responsibly.
3. **AAC Initial Supply**: All 1B AAC is in your wallet initially. Transfer to distribution wallets ASAP.
4. **Backup**: Save `token-addresses.json` and wallet keypair securely.

## Troubleshooting

**Error: Insufficient balance**
- Solution: Add more SOL to your wallet

**Error: Transaction failed**
- Solution: Check RPC endpoint is working, try again

**Error: Module not found**
- Solution: Run `npm install @solana/web3.js @solana/spl-token`

## Next Steps

After token creation:
1. ✅ Create tokens (this script)
2. ⏳ Create distribution wallets
3. ⏳ Transfer AAC to distribution wallets
4. ⏳ Set up AAP minting script (for reward distribution)
5. ⏳ Deploy verification script (GitHub + X checks)
6. ⏳ Update website with token addresses
7. ⏳ Announce token launch

## References

- [Solana SPL Token Documentation](https://spl.solana.com/token)
- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [Solscan Explorer](https://solscan.io/)
