import React from 'react';
import { useOrderBook } from '../../hooks/useOrderBook';
import OrderBookRow from './OrderBookRow';
import { useLanguage } from '../../contexts/LanguageContext';

const OrderBook = () => {
  const { t } = useLanguage();
  const { bids, asks, isLoading } = useOrderBook();

  if (isLoading) {
    return <div className="animate-pulse bg-gray-800 h-96 rounded-lg"></div>;
  }

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">{t('exchange.orderBook')}</h2>
      <div className="grid grid-cols-3 gap-4 text-sm font-medium mb-2">
        <div>{t('exchange.price')}</div>
        <div>{t('exchange.amount')}</div>
        <div>{t('exchange.total')}</div>
      </div>
      <div className="space-y-1">
        {asks.map((order) => (
          <OrderBookRow key={order.price} order={order} type="ask" />
        ))}
        <div className="border-t border-gray-700 my-2"></div>
        {bids.map((order) => (
          <OrderBookRow key={order.price} order={order} type="bid" />
        ))}
      </div>
    </div>
  );
};

export default OrderBook;