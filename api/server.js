const express = require('express');
const { handleRequest } = require('./reward/generate-challenge');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (if needed for GitHub Pages)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Reward challenge endpoint
app.post('/api/reward/challenge', (req, res) => {
  // Extract real IP
  req.body.ip = req.ip || 
                req.headers['x-forwarded-for']?.split(',')[0] || 
                req.connection.remoteAddress || 
                '0.0.0.0';
  
  handleRequest(req, res);
});

// Start server
app.listen(PORT, () => {
  console.log(`Reward API server listening on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Challenge endpoint: POST http://localhost:${PORT}/api/reward/challenge`);
});
