export interface Market {
  pair: string;
  price: number;
  change24h: number;
  volume24h: number;
}

export interface Order {
  price: number;
  amount: number;
}

export interface Trade {
  price: number;
  amount: number;
  side: 'buy' | 'sell';
  timestamp: number;
}