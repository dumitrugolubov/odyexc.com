import React from 'react';
import { formatPrice, formatAmount } from '../../utils/formatters';
import type { Order } from '../../types';

interface OrderBookRowProps {
  order: Order;
  type: 'bid' | 'ask';
}

const OrderBookRow = ({ order, type }: OrderBookRowProps) => {
  const colorClass = type === 'bid' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="grid grid-cols-3 gap-4 text-sm hover:bg-gray-800 p-1 rounded">
      <div className={colorClass}>{formatPrice(order.price)}</div>
      <div>{formatAmount(order.amount)}</div>
      <div>{formatAmount(order.price * order.amount)}</div>
    </div>
  );
};

export default OrderBookRow;