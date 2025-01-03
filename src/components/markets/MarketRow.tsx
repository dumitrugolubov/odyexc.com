import React from 'react';
import { formatPrice, formatChange, formatVolume } from '../../utils/formatters';
import type { Market } from '../../types';

interface MarketRowProps {
  market: Market;
}

const MarketRow = ({ market }: MarketRowProps) => {
  const changeColor = market.change24h >= 0 ? 'text-green-500' : 'text-red-500';

  return (
    <tr className="hover:bg-gray-900 transition-colors">
      <td className="p-4 font-medium">{market.pair}</td>
      <td className="p-4">{formatPrice(market.price)}</td>
      <td className={`p-4 ${changeColor}`}>{formatChange(market.change24h)}</td>
      <td className="p-4">{formatVolume(market.volume24h)}</td>
    </tr>
  );
};

export default MarketRow;