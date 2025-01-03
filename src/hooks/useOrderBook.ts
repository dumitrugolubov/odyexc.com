import { useState, useEffect } from 'react';
import type { Order } from '../types';

const DEMO_ORDERS: { bids: Order[]; asks: Order[] } = {
  bids: [
    { price: 64950, amount: 0.5 },
    { price: 64900, amount: 1.2 },
    { price: 64850, amount: 0.8 },
  ],
  asks: [
    { price: 65000, amount: 0.3 },
    { price: 65050, amount: 0.7 },
    { price: 65100, amount: 1.5 },
  ],
};

export const useOrderBook = () => {
  const [bids, setBids] = useState<Order[]>([]);
  const [asks, setAsks] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderBook = async () => {
      try {
        // In a real app, this would be a WebSocket connection
        setBids(DEMO_ORDERS.bids);
        setAsks(DEMO_ORDERS.asks);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load order book:', err);
        setIsLoading(false);
      }
    };

    fetchOrderBook();
  }, []);

  return { bids, asks, isLoading };
};