#!/usr/bin/env python3
"""
Fetch $TRUMP token data from OKX OnChainOS API.
Serves as backup/verification source for Bitget Wallet data.
"""
import os
import sys
import json
import time
import hmac
import base64
import urllib.parse
import urllib.request

BASE_URL = 'https://web3.okx.com'
API_KEY = os.environ.get('OKX_API_KEY', '03f0b376-251c-4618-862e-ae92929e0416')
SECRET_KEY = os.environ.get('OKX_SECRET_KEY', '652ECE8FF13210065B0851FFDA9191F7')
PASSPHRASE = os.environ.get('OKX_PASSPHRASE', 'onchainOS#666')

# Official $TRUMP on Solana
TRUMP_CONTRACT = '6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN'
SOLANA_CHAIN = '501'

def get_signature(timestamp, method, request_path, body=''):
    message = str(timestamp) + str(method.upper()) + str(request_path) + str(body)
    mac = hmac.new(bytes(SECRET_KEY, encoding='utf-8'), bytes(message, encoding='utf-8'), digestmod='sha256')
    d = mac.digest()
    return base64.b64encode(d).decode('utf-8')

def okx_fetch(method, path, body_dict=None):
    timestamp = time.strftime('%Y-%m-%dT%H:%M:%S.000Z', time.gmtime())
    body_str = json.dumps(body_dict) if body_dict is not None else ''
    
    sign = get_signature(timestamp, method, path, body_str)
    
    headers = {
        'OK-ACCESS-KEY': API_KEY,
        'OK-ACCESS-SIGN': sign,
        'OK-ACCESS-PASSPHRASE': PASSPHRASE,
        'OK-ACCESS-TIMESTAMP': timestamp,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    url = BASE_URL + path
    req = urllib.request.Request(url, data=body_str.encode('utf-8') if body_str else None, headers=headers, method=method)
    
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            res_body = response.read()
            data = json.loads(res_body)
            if data.get('code') != '0':
                raise Exception(f"API Error: {data.get('msg')} (Code: {data.get('code')})")
            return data.get('data')
    except Exception as e:
        raise Exception(f"OKX API request failed: {e}")

def get_trump_data():
    """Fetch comprehensive $TRUMP data from OKX OnChainOS."""
    try:
        # Get detailed price info (includes liquidity, volume, holders, txs)
        info_data = okx_fetch('POST', '/api/v6/dex/market/price-info', [
            {"chainIndex": SOLANA_CHAIN, "tokenContractAddress": TRUMP_CONTRACT}
        ])
        
        if not info_data or len(info_data) == 0:
            return {"error": "No data returned from OKX API"}
        
        token = info_data[0]
        
        # Parse and structure the data
        result = {
            "source": "okx_onchainos",
            "timestamp": int(time.time()),
            "price_usd": float(token.get("price", 0)),
            "market_cap": float(token.get("marketCap", 0)),
            "liquidity": float(token.get("liquidity", 0)),
            "volume_24h": float(token.get("volume24H", 0)),
            "holders": int(token.get("holders", 0)) if token.get("holders") else None,
            "price_change": {
                "5m": float(token.get("priceChange5M", 0)),
                "1h": float(token.get("priceChange1H", 0)),
                "4h": float(token.get("priceChange4H", 0)),
                "24h": float(token.get("priceChange24H", 0))
            },
            "txs": {
                "5m": int(token.get("txs5M", 0)),
                "1h": int(token.get("txs1H", 0)),
                "4h": int(token.get("txs4H", 0)),
                "24h": int(token.get("txs24H", 0))
            },
            "volume": {
                "5m": float(token.get("volume5M", 0)),
                "1h": float(token.get("volume1H", 0)),
                "4h": float(token.get("volume4H", 0)),
                "24h": float(token.get("volume24H", 0))
            },
            "price_range_24h": {
                "high": float(token.get("maxPrice", 0)),
                "low": float(token.get("minPrice", 0))
            },
            "circ_supply": float(token.get("circSupply", 0)),
            "raw": token  # Keep raw data for debugging
        }
        
        return result
        
    except Exception as e:
        return {"error": str(e)}

def main():
    data = get_trump_data()
    print(json.dumps(data, indent=2))
    
    if "error" in data:
        sys.exit(1)

if __name__ == '__main__':
    main()
