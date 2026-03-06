#!/usr/bin/env node
/**
 * Create AAP and AAC tokens on Solana
 * 
 * AAP: Agent Alpha Points (non-transferable, unlimited supply)
 * AAC: Agent Alpha Coin (transferable, 1B fixed supply)
 */

const { Connection, Keypair, PublicKey } = require('@solana/web3.js');
const { 
  createMint, 
  getOrCreateAssociatedTokenAccount,
  mintTo,
  setAuthority,
  AuthorityType
} = require('@solana/spl-token');
const fs = require('fs');
const path = require('path');

// Configuration
const RPC_URL = process.env.SOLANA_RPC || 'https://api.mainnet-beta.solana.com';
const PAYER_KEYPAIR_PATH = process.env.PAYER_KEYPAIR || path.join(process.env.HOME, '.config/solana/id.json');

// Token parameters
const AAP_DECIMALS = 0;  // Integer points
const AAC_DECIMALS = 6;   // Standard SPL decimals
const AAC_TOTAL_SUPPLY = 1_000_000_000; // 1 billion

async function loadKeypair(filepath) {
  const secretKey = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  return Keypair.fromSecretKey(Uint8Array.from(secretKey));
}

async function createAAP(connection, payer) {
  console.log('\n=== Creating AAP (Agent Alpha Points) ===');
  
  // Create mint with unlimited supply
  const aacpMint = await createMint(
    connection,
    payer,
    payer.publicKey,  // Mint authority (can mint more)
    payer.publicKey,  // Freeze authority (can freeze accounts)
    AAP_DECIMALS
  );
  
  console.log(`✅ AAP Mint Address: ${aapMint.toBase58()}`);
  console.log(`   - Decimals: ${AAP_DECIMALS}`);
  console.log(`   - Mint Authority: ${payer.publicKey.toBase58()} (can mint more)`);
  console.log(`   - Freeze Authority: ${payer.publicKey.toBase58()} (can freeze accounts)`);
  console.log(`   - Supply: Unlimited (minted as needed)`);
  
  return aacpMint;
}

async function createAAC(connection, payer) {
  console.log('\n=== Creating AAC (Agent Alpha Coin) ===');
  
  // Step 1: Create mint
  const aacMint = await createMint(
    connection,
    payer,
    payer.publicKey,  // Temporary mint authority
    null,             // No freeze authority (fully decentralized)
    AAC_DECIMALS
  );
  
  console.log(`✅ AAC Mint Address: ${eteMint.toBase58()}`);
  console.log(`   - Decimals: ${AAC_DECIMALS}`);
  console.log(`   - Freeze Authority: None (fully decentralized)`);
  
  // Step 2: Create token account for payer
  const payerTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    aacMint,
    payer.publicKey
  );
  
  console.log(`✅ Created token account: ${payerTokenAccount.address.toBase58()}`);
  
  // Step 3: Mint total supply
  const totalSupplyWithDecimals = AAC_TOTAL_SUPPLY * Math.pow(10, AAC_DECIMALS);
  await mintTo(
    connection,
    payer,
    aacMint,
    payerTokenAccount.address,
    payer.publicKey,
    totalSupplyWithDecimals
  );
  
  console.log(`✅ Minted ${AAC_TOTAL_SUPPLY.toLocaleString()} AAC to ${payerTokenAccount.address.toBase58()}`);
  
  // Step 4: Revoke mint authority (make supply fixed)
  await setAuthority(
    connection,
    payer,
    aacMint,
    payer.publicKey,
    AuthorityType.MintTokens,
    null  // Set to null = revoke authority
  );
  
  console.log(`✅ Mint authority revoked (supply is now fixed at 1B)`);
  
  return { aacMint, payerTokenAccount };
}

async function main() {
  console.log('=== Solana Token Creation Script ===');
  console.log(`RPC: ${RPC_URL}`);
  
  // Load payer keypair
  const payer = await loadKeypair(PAYER_KEYPAIR_PATH);
  console.log(`Payer: ${payer.publicKey.toBase58()}`);
  
  // Connect to Solana
  const connection = new Connection(RPC_URL, 'confirmed');
  
  // Check balance
  const balance = await connection.getBalance(payer.publicKey);
  console.log(`Balance: ${balance / 1e9} SOL`);
  
  if (balance < 0.1 * 1e9) {
    console.error('❌ Insufficient balance. Need at least 0.1 SOL for token creation.');
    process.exit(1);
  }
  
  // Create AAP
  const aacpMint = await createAAP(connection, payer);
  
  // Create AAC
  const { aacMint, payerTokenAccount } = await createAAC(connection, payer);
  
  // Save token addresses
  const tokenInfo = {
    aacp: {
      mint: aacpMint.toBase58(),
      decimals: AAP_DECIMALS,
      supply: 'unlimited',
      mintAuthority: payer.publicKey.toBase58(),
      freezeAuthority: payer.publicKey.toBase58()
    },
    aac: {
      mint: aacMint.toBase58(),
      decimals: AAC_DECIMALS,
      supply: AAC_TOTAL_SUPPLY,
      mintAuthority: 'revoked',
      freezeAuthority: 'none',
      initialHolder: payerTokenAccount.address.toBase58()
    },
    createdAt: new Date().toISOString(),
    network: RPC_URL.includes('devnet') ? 'devnet' : 'mainnet'
  };
  
  const outputPath = path.join(__dirname, 'token-addresses.json');
  fs.writeFileSync(outputPath, JSON.stringify(tokenInfo, null, 2));
  
  console.log('\n=== Summary ===');
  console.log(`AAP Mint: ${aapMint.toBase58()}`);
  console.log(`AAC Mint: ${eteMint.toBase58()}`);
  console.log(`Token info saved to: ${outputPath}`);
  console.log('\n✅ Token creation complete!');
  console.log('\nNext steps:');
  console.log('1. Update docs/agent-reward.md with token addresses');
  console.log('2. Set up reward distribution wallet');
  console.log('3. Deploy verification script for GitHub/X checks');
}

main().catch(console.error);
