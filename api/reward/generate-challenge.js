#!/usr/bin/env node
/**
 * Solana Pay Reward System - Step 1: Generate Challenge
 * 
 * Logic:
 * 1. Receive Solana address from Agent
 * 2. Check if address already claimed (prevent duplicates)
 * 3. Check IP rate limit (prevent spam)
 * 4. Generate random question from questions.json
 * 5. Create challenge ID
 * 6. Return: question + challenge ID + payment instructions
 */

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const QUESTIONS_FILE = path.join(__dirname, 'questions.json');
const CLAIMS_DIR = path.join(__dirname, '../../data/reward-claims');
const CHALLENGES_FILE = path.join(CLAIMS_DIR, 'challenges.json');
const CLAIMED_FILE = path.join(CLAIMS_DIR, 'claimed.json');
const IP_LIMIT_FILE = path.join(CLAIMS_DIR, 'ip-limits.json');

const DAILY_LIMIT = 50;
const IP_DAILY_LIMIT = 3;
const YOUR_WALLET = process.env.REWARD_WALLET || 'YOUR_SOLANA_WALLET_ADDRESS';

// Ensure data directory exists
if (!fs.existsSync(CLAIMS_DIR)) {
  fs.mkdirSync(CLAIMS_DIR, { recursive: true });
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

function checkDailyLimit() {
  const claimed = loadJSON(CLAIMED_FILE, []);
  const today = new Date().toISOString().split('T')[0];
  const todayClaims = claimed.filter(c => c.date === today);
  return todayClaims.length < DAILY_LIMIT;
}

function checkIPLimit(ip) {
  const ipLimits = loadJSON(IP_LIMIT_FILE, {});
  const today = new Date().toISOString().split('T')[0];
  
  if (!ipLimits[today]) {
    ipLimits[today] = {};
  }
  
  const count = ipLimits[today][ip] || 0;
  
  if (count >= IP_DAILY_LIMIT) {
    return false;
  }
  
  ipLimits[today][ip] = count + 1;
  saveJSON(IP_LIMIT_FILE, ipLimits);
  return true;
}

function checkAlreadyClaimed(address) {
  const claimed = loadJSON(CLAIMED_FILE, []);
  return claimed.some(c => c.address === address);
}

function generateChallenge(address) {
  const questions = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf8'));
  const question = questions[Math.floor(Math.random() * questions.length)];
  
  const challengeId = crypto.randomBytes(16).toString('hex');
  const challenges = loadJSON(CHALLENGES_FILE, {});
  
  challenges[challengeId] = {
    address,
    questionId: question.id,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString() // 10 min expiry
  };
  
  saveJSON(CHALLENGES_FILE, challenges);
  
  return {
    challengeId,
    question: question.question,
    instructions: {
      step1: `Send a 0 SOL transaction to: ${YOUR_WALLET}`,
      step2: `Include this memo: CHALLENGE:${challengeId}:ANSWER:<your_answer>`,
      step3: `Example memo: CHALLENGE:${challengeId}:ANSWER:binance`,
      note: `You will pay ~0.000005 SOL gas fee. After verification, you'll receive a micro-reward that covers your gas cost and leaves a small surplus.`
    }
  };
}

// Main handler
function handleRequest(req, res) {
  const { address, ip } = req.body;
  
  if (!address || !/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) {
    return res.status(400).json({ error: 'Invalid Solana address' });
  }
  
  if (checkAlreadyClaimed(address)) {
    return res.status(403).json({ error: 'Address already claimed reward' });
  }
  
  if (!checkDailyLimit()) {
    return res.status(429).json({ error: 'Daily limit reached. Try again tomorrow.' });
  }
  
  if (!checkIPLimit(ip)) {
    return res.status(429).json({ error: 'IP rate limit exceeded. Try again tomorrow.' });
  }
  
  const challenge = generateChallenge(address);
  res.json(challenge);
}

// Export for use in server
module.exports = { handleRequest };

// CLI test mode
if (require.main === module) {
  const testAddress = process.argv[2] || 'DemoAddressForTesting123456789012345';
  const testIP = '127.0.0.1';
  
  const mockReq = {
    body: { address: testAddress, ip: testIP }
  };
  
  const mockRes = {
    status: (code) => ({
      json: (data) => console.log(JSON.stringify({ status: code, ...data }, null, 2))
    }),
    json: (data) => console.log(JSON.stringify(data, null, 2))
  };
  
  handleRequest(mockReq, mockRes);
}
