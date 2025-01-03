import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import MarketRow from './MarketRow';
import MarketTableSkeleton from './MarketTableSkeleton';
import { useMarketData } from '../../hooks/useMarketData';
import { MarketSort } from './MarketSort';

const MarketTable = () => {
  const { t } = useLanguage();
  const { markets, isLoading, error } = useMarketData();

  if (isLoading) {
    return <MarketTableSkeleton />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-900">
          <tr>
            <th className="p-4">Par</th>
            <th className="p-4">Preço</th>
            <th className="p-4">24h %</th>
            <th className="p-4">Volume 24h</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {markets.map((market) => (
            <MarketRow key={market.pair} market={market} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;