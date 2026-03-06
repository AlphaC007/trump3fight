#!/usr/bin/env node
/**
 * Reward monitor v2
 *
 * Supports memo format:
 * AAP_CLAIM:<wallet>:ANSWER:<answer>:GITHUB:<github_username>:X:@<x_handle>
 *
 * Flow:
 * 1) detect 0-SOL transfers to REWARD_WALLET with valid memo
 * 2) verify answer=yes (bullish)
 * 3) verify GitHub starred 3 required repos
 * 4) send AAP reward (best effort)
 * 5) persist claimed record
 */

const {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  sendAndConfirmTransaction,
} = require('@solana/web3.js');
const {
  getAssociatedTokenAddress,
  getOrCreateAssociatedTokenAccount,
  createMintToInstruction,
  TOKEN_PROGRAM_ID,
} = require('@solana/spl-token');
const fs = require('fs');
const path = require('path');

const CLAIMS_DIR = path.join(__dirname, '../../data/reward-claims');
const CLAIMED_FILE = path.join(CLAIMS_DIR, 'claimed.json');
const LOG_FILE = path.join(CLAIMS_DIR, 'rewards.log');

const RPC_URLS = (process.env.SOLANA_RPCS || process.env.SOLANA_RPC || 'https://solana-rpc.publicnode.com,https://api.mainnet-beta.solana.com')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);
const REWARD_WALLET_STR = process.env.REWARD_WALLET || '74iUe8qbkF3SQcuCUo937FVjwSxgoaukTkrdshfgo6AV';
const REWARD_WALLET = new PublicKey(REWARD_WALLET_STR);
const REWARD_MINT = new PublicKey(process.env.REWARD_MINT || '88qaBzn5dQ5Uc76coBT4R349vJ6VwjwrxLVi258VrMb1'); // AAP mint (default)
const REWARD_AMOUNT = Number(process.env.REWARD_AMOUNT || 16000); // default 16,000 AAP base units (adjust by token decimals)

const REQUIRED_GH_REPOS = [
  ['AlphaC007', 'trump3fight'],
  ['AlphaC007', 'aap-agent-bounty-skill'],
  ['AlphaC007', 'blind-box'],
];

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function loadJSON(file, defaultValue = {}) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return defaultValue;
  }
}

function saveJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function appendLog(line) {
  fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${line}\n`);
}

function getKeypairFromEnv() {
  const b64 = process.env.SOLANA_PRIVATE_KEY;
  if (!b64) return null;
  return Keypair.fromSecretKey(Buffer.from(b64, 'base64'));
}

function parseMemo(memo) {
  // New format
  let m = memo.match(/^AAP_CLAIM:([^:]+):ANSWER:([^:]+):GITHUB:([^:]+):X:@?([^\s]+)$/i);
  if (m) {
    return {
      kind: 'trump_meme',
      wallet: m[1].trim(),
      answer: m[2].trim().toLowerCase(),
      github: m[3].trim(),
      x: m[4].trim(),
    };
  }

  // Legacy challenge format compatibility
  m = memo.match(/^CHALLENGE:([a-f0-9]+):ANSWER:(.+)$/i);
  if (m) {
    return {
      kind: 'challenge',
      challengeId: m[1],
      answer: m[2].trim().toLowerCase(),
    };
  }

  return null;
}

async function githubStarred(username, owner, repo) {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/starred/${owner}/${repo}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'aap-reward-monitor',
      'Accept': 'application/vnd.github+json',
    },
  });
  return res.status === 204;
}

async function verifyGitHubStars(username) {
  const checks = [];
  for (const [owner, repo] of REQUIRED_GH_REPOS) {
    const ok = await githubStarred(username, owner, repo);
    checks.push({ owner, repo, ok });
  }
  return {
    ok: checks.every(c => c.ok),
    checks,
  };
}

async function sendReward(connection, payer, recipientAddress) {
  const recipient = new PublicKey(recipientAddress);

  const recipientAta = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    REWARD_MINT,
    recipient
  );

  // AAP is minted on demand by mint authority (zero-transfer wallet (reward distribution verification only))
  const ix = createMintToInstruction(
    REWARD_MINT,
    recipientAta.address,
    payer.publicKey,
    REWARD_AMOUNT,
    [],
    TOKEN_PROGRAM_ID
  );

  const tx = new Transaction().add(ix);
  const sig = await sendAndConfirmTransaction(connection, tx, [payer], {
    commitment: 'confirmed',
    skipPreflight: false,
  });
  return sig;
}

async function processSignature(connection, payer, signature, seen) {
  if (seen.has(signature)) return;
  seen.add(signature);

  const tx = await connection.getTransaction(signature, {
    commitment: 'confirmed',
    maxSupportedTransactionVersion: 0,
  });
  if (!tx || !tx.meta || tx.meta.err) return;

  const accountKeys = tx.transaction.message.accountKeys.map(k => k.toBase58());
  const fromAddress = accountKeys[0];

  let hasZeroTransferToReward = false;
  for (const ix of tx.transaction.message.instructions) {
    if (ix.programId?.toBase58?.() === '11111111111111111111111111111111') {
      // parsed system transfer unavailable in raw mode; fallback via meta balances diff is hard.
      // use parsed mode below for certainty
    }
  }

  const parsedTx = await connection.getParsedTransaction(signature, {
    commitment: 'confirmed',
    maxSupportedTransactionVersion: 0,
  });
  if (!parsedTx || !parsedTx.transaction) return;

  let memo = null;
  for (const ix of parsedTx.transaction.message.instructions) {
    if (ix.program === 'system' && ix.parsed?.type === 'transfer') {
      const info = ix.parsed.info || {};
      if (String(info.destination) === REWARD_WALLET_STR && Number(info.lamports || 0) === 0) {
        hasZeroTransferToReward = true;
      }
    }
    if (ix.program === 'spl-memo') {
      memo = typeof ix.parsed === 'string' ? ix.parsed : null;
    }
  }

  if (!hasZeroTransferToReward || !memo) return;

  const parsedMemo = parseMemo(memo);
  if (!parsedMemo) {
    appendLog(`SKIP ${signature} invalid_memo`);
    return;
  }

  const claimed = loadJSON(CLAIMED_FILE, []);
  if (claimed.some(c => c.signature === signature || c.address === fromAddress)) {
    appendLog(`SKIP ${signature} already_claimed ${fromAddress}`);
    return;
  }

  // New flow only
  if (parsedMemo.kind !== 'trump_meme') {
    appendLog(`SKIP ${signature} legacy_memo_not_supported`);
    return;
  }

  if (!['yes', 'bull', 'bull-first', '100', '$100'].some(k => parsedMemo.answer.includes(k))) {
    appendLog(`PENDING ${signature} invalid_answer=${parsedMemo.answer}`);
    return;
  }

  const gh = await verifyGitHubStars(parsedMemo.github);
  if (!gh.ok) {
    appendLog(`PENDING ${signature} github_star_unverified user=${parsedMemo.github} checks=${JSON.stringify(gh.checks)}`);
    claimed.push({
      status: 'pending',
      reason: 'github_star_unverified',
      signature,
      address: fromAddress,
      github: parsedMemo.github,
      x: parsedMemo.x,
      checks: gh.checks,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    return;
  }

  if (!payer) {
    claimed.push({
      status: 'pending',
      reason: 'reward_signer_not_configured',
      signature,
      address: fromAddress,
      github: parsedMemo.github,
      x: parsedMemo.x,
      memo,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`PENDING ${signature} reward_signer_not_configured addr=${fromAddress}`);
    return;
  }

  try {
    const rewardSig = await sendReward(connection, payer, fromAddress);
    claimed.push({
      status: 'approved',
      signature,
      rewardTx: rewardSig,
      address: fromAddress,
      github: parsedMemo.github,
      x: parsedMemo.x,
      memo,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`APPROVED ${signature} rewardTx=${rewardSig} addr=${fromAddress}`);
    console.log(`✅ Reward sent for ${signature}: ${rewardSig}`);
  } catch (e) {
    appendLog(`ERROR ${signature} reward_send_failed ${e.message}`);
    console.error(`❌ Reward send failed for ${signature}:`, e.message);
  }
}

async function backfillRecent(connection, payer, seen, limit = 30) {
  const sigs = await connection.getSignaturesForAddress(REWARD_WALLET, { limit });
  for (const s of sigs.reverse()) {
    await processSignature(connection, payer, s.signature, seen);
  }
}

async function monitor() {
  ensureDir(CLAIMS_DIR);
  const connections = RPC_URLS.map(u => ({ url: u, conn: new Connection(u, 'confirmed') }));
  const payer = getKeypairFromEnv();
  const seen = new Set();

  console.log(`Monitoring zero-transfer wallet (reward distribution verification only): ${REWARD_WALLET_STR}`);
  console.log(`RPC pool: ${RPC_URLS.join(' | ')}`);
  if (payer) {
    console.log(`Payer wallet: ${payer.publicKey.toBase58()}`);
  } else {
    console.log('Payer wallet: NOT CONFIGURED (pending-only mode)');
  }

  // Backfill with first healthy RPC
  let backfillDone = false;
  for (const { url, conn } of connections) {
    try {
      await backfillRecent(conn, payer, seen, 20);
      backfillDone = true;
      appendLog(`INFO backfill_ok rpc=${url}`);
      break;
    } catch (e) {
      appendLog(`WARN backfill_failed rpc=${url} err=${e.message}`);
    }
  }
  if (!backfillDone) {
    console.warn('Backfill skipped: all RPCs failed or rate-limited');
  }

  // Subscribe all RPCs; dedupe by signature in-memory
  for (const { url, conn } of connections) {
    conn.onLogs(REWARD_WALLET, async ({ signature }) => {
      try {
        await processSignature(conn, payer, signature, seen);
      } catch (e) {
        appendLog(`ERROR ${signature} monitor_exception rpc=${url} ${e.message}`);
      }
    }, 'confirmed');
    appendLog(`INFO subscribed rpc=${url}`);
  }

  console.log('Listening for new claim transfers...');
}

if (require.main === module) {
  monitor().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { parseMemo, verifyGitHubStars };
