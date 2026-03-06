#!/usr/bin/env node
/**
 * Convert base58 private key to JSON format for Solana
 */

const bs58 = require('bs58');
const fs = require('fs');

const base58Key = fs.readFileSync('/home/xai8/.openclaw/ktrump', 'utf8').trim();

try {
  const decoded = bs58.default ? bs58.default.decode(base58Key) : bs58.decode(base58Key);
  const jsonKey = JSON.stringify(Array.from(decoded));
  
  fs.writeFileSync('/home/xai8/.openclaw/ktrump.json', jsonKey);
  console.log('✅ Converted base58 to JSON format');
  console.log('Output: /home/xai8/.openclaw/ktrump.json');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
