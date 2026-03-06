#!/usr/bin/env node
/**
 * Free Coinglass alternative using public Binance/OKX/Bybit APIs.
 * Coverage: OI, funding rate, long/short ratio, taker buy/sell, fear&greed.
 *
 * Usage:
 *   node coinglass_free.mjs oi [symbol]            — aggregate OI across exchanges
 *   node coinglass_free.mjs funding [symbol]       — funding rates across exchanges
 *   node coinglass_free.mjs longshort [symbol]     — long/short ratios (Binance)
 *   node coinglass_free.mjs taker [symbol]         — taker buy/sell ratio (Binance)
 *   node coinglass_free.mjs oihistory [symbol]     — OI history (Binance)
 *   node coinglass_free.mjs feargreed              — fear & greed index
 *   node coinglass_free.mjs exchanges              — derivatives exchange ranking
 *   node coinglass_free.mjs dashboard [symbol]     — consolidated dashboard
 */

const BASE = {
  binance: 'https://fapi.binance.com',
  okx: 'https://www.okx.com',
  bybit: 'https://api.bybit.com',
};

async function fetchJSON(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

// ─── OI ───
async function getBinanceOI(sym) {
  const d = await fetchJSON(`${BASE.binance}/fapi/v1/openInterest?symbol=${sym}USDT`);
  return { exchange: 'Binance', symbol: `${sym}USDT`, oi_quantity: +d.openInterest, time: d.time };
}

async function getOKXOI(sym) {
  const d = await fetchJSON(`${BASE.okx}/api/v5/public/open-interest?instType=SWAP&instFamily=${sym}-USDT`);
  const item = d.data?.[0];
  if (!item) return null;
  return { exchange: 'OKX', symbol: item.instId, oi_quantity: +item.oiCcy, oi_usd: +item.oiUsd, time: +item.ts };
}

async function getBybitOI(sym) {
  const d = await fetchJSON(`${BASE.bybit}/v5/market/open-interest?category=linear&symbol=${sym}USDT&intervalTime=5min&limit=1`);
  const item = d.result?.list?.[0];
  if (!item) return null;
  return { exchange: 'Bybit', symbol: `${sym}USDT`, oi_quantity: +item.openInterest, time: +item.timestamp };
}

async function allOI(sym) {
  const [bn, okx, bybit] = await Promise.allSettled([getBinanceOI(sym), getOKXOI(sym), getBybitOI(sym)]);
  return [bn, okx, bybit].filter(r => r.status === 'fulfilled' && r.value).map(r => r.value);
}

// ─── Funding Rate ───
async function getBinanceFunding(sym) {
  const d = await fetchJSON(`${BASE.binance}/fapi/v1/fundingRate?symbol=${sym}USDT&limit=1`);
  const item = d[0];
  return { exchange: 'Binance', symbol: `${sym}USDT`, funding_rate: +item.fundingRate, mark_price: +item.markPrice, time: item.fundingTime };
}

async function getOKXFunding(sym) {
  const d = await fetchJSON(`${BASE.okx}/api/v5/public/funding-rate?instId=${sym}-USDT-SWAP`);
  const item = d.data?.[0];
  if (!item) return null;
  return { exchange: 'OKX', symbol: item.instId, funding_rate: +item.fundingRate, next_funding_time: +item.nextFundingTime, time: +item.ts };
}

async function getBybitFunding(sym) {
  const d = await fetchJSON(`${BASE.bybit}/v5/market/tickers?category=linear&symbol=${sym}USDT`);
  const item = d.result?.list?.[0];
  if (!item) return null;
  return { exchange: 'Bybit', symbol: `${sym}USDT`, funding_rate: +item.fundingRate, price: +item.lastPrice, oi: +item.openInterest, volume24h: +item.volume24h };
}

async function allFunding(sym) {
  const [bn, okx, bybit] = await Promise.allSettled([getBinanceFunding(sym), getOKXFunding(sym), getBybitFunding(sym)]);
  return [bn, okx, bybit].filter(r => r.status === 'fulfilled' && r.value).map(r => r.value);
}

// ─── Long/Short Ratio (Binance) ───
async function getLongShort(sym, period = '4h', limit = 5) {
  const [global, top, topPos] = await Promise.all([
    fetchJSON(`${BASE.binance}/futures/data/globalLongShortAccountRatio?symbol=${sym}USDT&period=${period}&limit=${limit}`),
    fetchJSON(`${BASE.binance}/futures/data/topLongShortAccountRatio?symbol=${sym}USDT&period=${period}&limit=${limit}`),
    fetchJSON(`${BASE.binance}/futures/data/topLongShortPositionRatio?symbol=${sym}USDT&period=${period}&limit=${limit}`),
  ]);
  return {
    global_account_ratio: global.map(d => ({ long: +d.longAccount, short: +d.shortAccount, ratio: +d.longShortRatio, time: d.timestamp })),
    top_trader_account_ratio: top.map(d => ({ long: +d.longAccount, short: +d.shortAccount, ratio: +d.longShortRatio, time: d.timestamp })),
    top_trader_position_ratio: topPos.map(d => ({ long: +d.longAccount, short: +d.shortAccount, ratio: +d.longShortRatio, time: d.timestamp })),
  };
}

// ─── Taker Buy/Sell (Binance) ───
async function getTakerVolume(sym, period = '4h', limit = 5) {
  const d = await fetchJSON(`${BASE.binance}/futures/data/takerlongshortRatio?symbol=${sym}USDT&period=${period}&limit=${limit}`);
  return d.map(item => ({
    buy_sell_ratio: +item.buySellRatio,
    buy_vol: +item.buyVol,
    sell_vol: +item.sellVol,
    time: item.timestamp,
  }));
}

// ─── Fear & Greed Index ───
async function getFearGreed(limit = 7) {
  const d = await fetchJSON(`https://api.alternative.me/fng/?limit=${limit}`);
  return d.data.map(item => ({
    value: +item.value,
    classification: item.value_classification,
    time: +item.timestamp * 1000,
  }));
}

// ─── CoinGecko Derivatives Exchanges (OI ranking) ───
async function getDerivativesExchanges(limit = 10) {
  const d = await fetchJSON(`https://api.coingecko.com/api/v3/derivatives/exchanges?per_page=${limit}`);
  return d.map(ex => ({
    name: ex.name,
    oi_btc: ex.open_interest_btc,
    volume_24h_btc: ex.trade_volume_24h_btc,
    number_of_perpetual_pairs: ex.number_of_perpetual_pairs,
    number_of_futures_pairs: ex.number_of_futures_pairs,
  }));
}

// ─── OI History (Binance) ───
async function getOIHistory(sym, period = '5m', limit = 30) {
  const d = await fetchJSON(`${BASE.binance}/futures/data/openInterestHist?symbol=${sym}USDT&period=${period}&limit=${limit}`);
  return d.map(item => ({
    oi_quantity: +item.sumOpenInterest,
    oi_usd: +item.sumOpenInterestValue,
    time: item.timestamp,
  }));
}

// ─── Dashboard ───
async function dashboard(sym) {
  const [oi, funding, ls, taker, fng] = await Promise.allSettled([
    allOI(sym),
    allFunding(sym),
    getLongShort(sym, '4h', 3),
    getTakerVolume(sym, '4h', 3),
    getFearGreed(3),
  ]);

  return {
    symbol: sym,
    timestamp: Date.now(),
    open_interest: oi.status === 'fulfilled' ? oi.value : oi.reason?.message,
    funding_rates: funding.status === 'fulfilled' ? funding.value : funding.reason?.message,
    long_short_ratio: ls.status === 'fulfilled' ? ls.value : ls.reason?.message,
    taker_buy_sell: taker.status === 'fulfilled' ? taker.value : taker.reason?.message,
    fear_greed: fng.status === 'fulfilled' ? fng.value : fng.reason?.message,
  };
}

// ─── CLI ───
async function main() {
  const [,, cmd, sym = 'BTC'] = process.argv;
  const s = sym.toUpperCase();

  try {
    let result;
    switch (cmd) {
      case 'oi':
        result = await allOI(s); break;
      case 'funding':
        result = await allFunding(s); break;
      case 'longshort':
        result = await getLongShort(s); break;
      case 'taker':
        result = await getTakerVolume(s); break;
      case 'feargreed':
        result = await getFearGreed(); break;
      case 'exchanges':
        result = await getDerivativesExchanges(); break;
      case 'oihistory':
        result = await getOIHistory(s); break;
      case 'dashboard':
        result = await dashboard(s); break;
      default:
        console.log('Usage: node coinglass_free.mjs <oi|funding|longshort|taker|oihistory|feargreed|exchanges|dashboard> [symbol]');
        process.exit(1);
    }
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
}

main();
