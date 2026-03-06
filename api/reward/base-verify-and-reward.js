#!/usr/bin/env node
/**
 * Base reward monitor (AAP/AAC)
 *
 * Flow:
 * 1) watch 0 ETH claim tx to REWARD_WALLET on Base
 * 2) parse optional payload from tx.input (utf8): AAP_CLAIM:GITHUB:<username>
 * 3) verify GitHub stars (3 repos)
 * 4) transfer AAC reward from zero-transfer wallet (reward distribution verification only) to claimant wallet
 */

const fs = require('fs');
const path = require('path');
const { ethers } = require('ethers');

const CLAIMS_DIR = path.join(__dirname, '../../data/reward-claims');
const CLAIMED_FILE = path.join(CLAIMS_DIR, 'base-claimed.json');
const LOG_FILE = path.join(CLAIMS_DIR, 'base-rewards.log');

const RPC_URLS = (process.env.BASE_RPCS || process.env.BASE_RPC_URL || 'https://base.llamarpc.com,https://mainnet.base.org')
  .split(',').map(s => s.trim()).filter(Boolean);

const REWARD_WALLET = (process.env.REWARD_WALLET || '0x53033d3965259D9FfDf0A80d0A249A1D5979266F').toLowerCase();
const REWARD_TOKEN = (process.env.REWARD_TOKEN || process.env.AAP_TOKEN || '0xC27dE7a379C345591C8bc886011454b34cB11a2C').toLowerCase();
const REWARD_TOKEN_DECIMALS = Number(process.env.REWARD_TOKEN_DECIMALS || process.env.AAP_DECIMALS || 18);
const REWARD_AMOUNT = process.env.REWARD_AMOUNT || process.env.REWARD_AMOUNT_AAP || '21000';
const SCAN_BLOCK_WINDOW = Number(process.env.BASE_SCAN_WINDOW || 20);
const POLL_SEC = Number(process.env.BASE_POLL_SEC || 15);

const REQUIRED_GH_REPOS = [
  ['AlphaC007', 'trump3fight'],
  ['AlphaC007', 'aap-agent-bounty-skill'],
  ['AlphaC007', 'blind-box'],
];

const ERC20_ABI = [
  'function transfer(address to, uint256 amount) returns (bool)',
  'function balanceOf(address owner) view returns (uint256)'
];

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function loadJSON(file, fallback = []) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
}

function saveJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function appendLog(msg) {
  fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${msg}\n`);
}

function getWallet() {
  const pk = process.env.BASE_PRIVATE_KEY || process.env.PRIVATE_KEY || process.env.SOLANA_PRIVATE_KEY;
  if (!pk) return null;
  let key = pk.trim();
  if (!key.startsWith('0x')) {
    // Not an EVM key; ignore safely.
    return null;
  }
  return new ethers.Wallet(key);
}

function parseClaimPayload(input) {
  if (!input || input === '0x') return null;
  try {
    const txt = Buffer.from(input.slice(2), 'hex').toString('utf8');
    const github = (txt.match(/GITHUB:([A-Za-z0-9_-]+)/i) || [])[1] || null;
    const answer = ((txt.match(/ANSWER:([^:\s]+)/i) || [])[1] || '').toLowerCase();
    const thesis = ((txt.match(/THESIS:([^:\s]+)/i) || [])[1] || '').toUpperCase();
    return { raw: txt, github, answer, thesis };
  } catch {
    return null;
  }
}

async function githubStarred(username, owner, repo) {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/starred/${owner}/${repo}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'aap-reward-monitor',
      'Accept': 'application/vnd.github+json'
    }
  });
  return res.status === 204;
}

async function verifyGitHubStars(username) {
  const checks = [];
  for (const [owner, repo] of REQUIRED_GH_REPOS) {
    const ok = await githubStarred(username, owner, repo);
    checks.push({ owner, repo, ok });
  }
  return { ok: checks.every(c => c.ok), checks };
}

async function processTx(provider, signer, txHash, seen) {
  if (seen.has(txHash)) return;
  seen.add(txHash);

  const tx = await provider.getTransaction(txHash);
  if (!tx || !tx.to || tx.to.toLowerCase() !== REWARD_WALLET) return;
  if (tx.value !== 0n) return;

  const receipt = await provider.getTransactionReceipt(txHash);
  if (!receipt || receipt.status !== 1) return;

  const from = tx.from.toLowerCase();
  const claimed = loadJSON(CLAIMED_FILE, []);
  if (claimed.some(c => c.tx_hash?.toLowerCase() === txHash.toLowerCase() || c.wallet_address?.toLowerCase() === from)) {
    return;
  }

  const payload = parseClaimPayload(tx.data || tx.input || '0x');
  const github = payload?.github || null;
  const answer = payload?.answer || '';
  const thesis = payload?.thesis || '';

  if (!github) {
    claimed.push({
      status: 'pending',
      reason: 'github_missing_in_claim_payload',
      tx_hash: txHash,
      wallet_address: from,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`PENDING ${txHash} github_missing wallet=${from}`);
    return;
  }

  if (thesis !== 'TRUMP_100' || answer !== 'yes') {
    claimed.push({
      status: 'pending',
      reason: 'thesis_ack_missing_or_invalid',
      tx_hash: txHash,
      wallet_address: from,
      github,
      thesis,
      answer,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`PENDING ${txHash} thesis_ack_invalid github=${github} thesis=${thesis} answer=${answer}`);
    return;
  }

  const gh = await verifyGitHubStars(github);
  if (!gh.ok) {
    claimed.push({
      status: 'pending',
      reason: 'github_star_unverified',
      tx_hash: txHash,
      wallet_address: from,
      github,
      checks: gh.checks,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`PENDING ${txHash} github_star_unverified github=${github}`);
    return;
  }

  if (!signer) {
    claimed.push({
      status: 'pending',
      reason: 'reward_signer_not_configured',
      tx_hash: txHash,
      wallet_address: from,
      github,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`PENDING ${txHash} reward_signer_not_configured wallet=${from}`);
    return;
  }

  const rewardSigner = signer.connect(provider);
  const token = new ethers.Contract(REWARD_TOKEN, ERC20_ABI, rewardSigner);
  const amount = ethers.parseUnits(REWARD_AMOUNT, REWARD_TOKEN_DECIMALS);

  try {
    const rewardTx = await token.transfer(from, amount);
    await rewardTx.wait();

    claimed.push({
      status: 'approved',
      reason: 'auto_approved',
      tx_hash: txHash,
      reward_tx: rewardTx.hash,
      wallet_address: from,
      github,
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`APPROVED ${txHash} rewardTx=${rewardTx.hash} wallet=${from}`);
    console.log(`✅ Reward sent for claim ${txHash}: ${rewardTx.hash}`);
  } catch (e) {
    claimed.push({
      status: 'pending',
      reason: 'reward_transfer_failed',
      tx_hash: txHash,
      wallet_address: from,
      github,
      error: String(e.message || e),
      timestamp: new Date().toISOString(),
    });
    saveJSON(CLAIMED_FILE, claimed);
    appendLog(`ERROR ${txHash} reward_transfer_failed ${e.message || e}`);
    console.error(`❌ Reward transfer failed for ${txHash}:`, e.message || e);
  }
}

async function monitor() {
  ensureDir(CLAIMS_DIR);
  if (!fs.existsSync(CLAIMED_FILE)) saveJSON(CLAIMED_FILE, []);

  const signer = getWallet();
  const providers = RPC_URLS.map(u => ({ url: u, provider: new ethers.JsonRpcProvider(u) }));
  const seen = new Set();

  console.log('Base reward monitor started');
  console.log('Zero-transfer wallet (reward distribution verification only):', REWARD_WALLET);
  console.log('Reward token:', REWARD_TOKEN);
  console.log('RPC pool:', RPC_URLS.join(' | '));
  console.log('Signer:', signer ? signer.address : 'NOT CONFIGURED (pending-only mode)');

  let lastBlock = 0;
  setInterval(async () => {
    for (const { url, provider } of providers) {
      try {
        const current = await provider.getBlockNumber();
        if (!lastBlock) lastBlock = current - SCAN_BLOCK_WINDOW - 1;
        const from = Math.max(current - SCAN_BLOCK_WINDOW, lastBlock + 1);

        for (let b = from; b <= current; b++) {
          const block = await provider.getBlock(b, true);
          if (!block || !block.transactions) continue;
          for (const item of block.transactions) {
            // Some RPCs return only tx hashes even when prefetch=true.
            const txHash = (typeof item === 'string') ? item : item.hash;
            if (!txHash) continue;
            const tx = (typeof item === 'string') ? await provider.getTransaction(txHash) : item;
            if (tx && tx.to && tx.to.toLowerCase() === REWARD_WALLET && tx.value === 0n) {
              await processTx(provider, signer, txHash, seen);
            }
          }
        }
        lastBlock = Math.max(lastBlock, current);
        break;
      } catch (e) {
        appendLog(`WARN rpc_failed ${url} ${e.message || e}`);
      }
    }
  }, POLL_SEC * 1000);
}

if (require.main === module) {
  monitor().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
