import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const TradingForm = () => {
  const { t } = useLanguage();
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log({ orderType, side, price, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg">
      <div className="flex gap-4 mb-6">
        <button
          type="button"
          className={`flex-1 py-2 rounded ${
            side === 'buy' ? 'bg-green-600' : 'bg-gray-700'
          }`}
          onClick={() => setSide('buy')}
        >
          {t('exchange.buy')}
        </button>
        <button
          type="button"
          className={`flex-1 py-2 rounded ${
            side === 'sell' ? 'bg-red-600' : 'bg-gray-700'
          }`}
          onClick={() => setSide('sell')}
        >
          {t('exchange.sell')}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value as 'market' | 'limit')}
            className="w-full bg-gray-800 rounded p-2"
          >
            <option value="market">{t('exchange.marketOrder')}</option>
            <option value="limit">{t('exchange.limitOrder')}</option>
          </select>
        </div>

        {orderType === 'limit' && (
          <div>
            <label className="block text-sm mb-1">{t('exchange.price')}</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-gray-800 rounded p-2"
              step="0.00000001"
              min="0"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm mb-1">{t('exchange.amount')}</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-gray-800 rounded p-2"
            step="0.00000001"
            min="0"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded ${
            side === 'buy' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {side === 'buy' ? t('exchange.placeBuyOrder') : t('exchange.placeSellOrder')}
        </button>
      </div>
    </form>
  );
};

export default TradingForm;