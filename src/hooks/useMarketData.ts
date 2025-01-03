import { useState, useEffect } from 'react';
import type { Market } from '../types';

const DEMO_MARKETS: Market[] = [
  { pair: 'BTC/USDT', price: 65000, change24h: 2.5, volume24h: 1500000000 },
  { pair: 'ETH/USDT', price: 3200, change24h: -1.2, volume24h: 800000000 },
  { pair: 'BNB/USDT', price: 320, change24h: 0.8, volume24h: 200000000 },
  { pair: 'SOL/USDT', price: 98, change24h: 5.4, volume24h: 150000000 },
];

export const useMarketData = () => {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        // In a real app, this would be an API call
        setMarkets(DEMO_MARKETS);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load market data');
        setIsLoading(false);
      }
    };

    fetchMarkets();
  }, []);

  return { markets, isLoading, error };
};