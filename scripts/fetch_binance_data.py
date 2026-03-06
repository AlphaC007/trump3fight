#!/usr/bin/env python3
import json
import requests

SOL_TRUMP_CA = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN"


def to_float(v):
    try:
        return float(v) if v is not None else None
    except Exception:
        return None


def main():
    out = {
        "source": "binance-web3",
        "chain_id": "CT_501",
        "contract": SOL_TRUMP_CA,
    }

    headers = {"Accept-Encoding": "identity"}

    # Token dynamic market data
    dyn_url = "https://web3.binance.com/bapi/defi/v4/public/wallet-direct/buw/wallet/market/token/dynamic/info"
    dyn = requests.get(
        dyn_url,
        params={"chainId": "CT_501", "contractAddress": SOL_TRUMP_CA},
        headers=headers,
        timeout=20,
    )
    dyn.raise_for_status()
    dyn_j = dyn.json()
    d = dyn_j.get("data") or {}

    out.update({
        "price_usd": to_float(d.get("price")),
        "volume_24h": to_float(d.get("volume24h")),
        "market_cap": to_float(d.get("marketCap")),
        "liquidity": to_float(d.get("liquidity")),
        "holders": int(float(d.get("holders"))) if d.get("holders") is not None else None,
        "top10_holder_pct": to_float(d.get("top10HoldersPercentage") or d.get("holdersTop10Percent")),
        "price_change": {
            "5m": to_float(d.get("percentChange5m")),
            "1h": to_float(d.get("percentChange1h")),
            "4h": to_float(d.get("percentChange4h")),
            "24h": to_float(d.get("percentChange24h")),
        },
        "txs": {
            "24h": int(float(d.get("count24h"))) if d.get("count24h") is not None else None,
            "1h": int(float(d.get("count1h"))) if d.get("count1h") is not None else None,
            "4h": int(float(d.get("count4h"))) if d.get("count4h") is not None else None,
            "5m": int(float(d.get("count5m"))) if d.get("count5m") is not None else None,
        },
    })

    # Spot ticker as CEX anchor
    spot = requests.get(
        "https://api.binance.com/api/v3/ticker/24hr",
        params={"symbol": "TRUMPUSDT"},
        timeout=10,
    )
    if spot.ok:
        sj = spot.json()
        out["spot"] = {
            "symbol": "TRUMPUSDT",
            "last_price": to_float(sj.get("lastPrice")),
            "price_change_pct": to_float(sj.get("priceChangePercent")),
            "volume_base": to_float(sj.get("volume")),
            "volume_quote": to_float(sj.get("quoteVolume")),
            "count": int(sj.get("count")) if sj.get("count") is not None else None,
        }

    print(json.dumps(out, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(json.dumps({"error": str(e)}))
