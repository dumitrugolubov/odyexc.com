import React from 'react';

const MarketTableSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-12 bg-gray-800 mb-4"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="h-16 bg-gray-800 mb-2"></div>
      ))}
    </div>
  );
};

export default MarketTableSkeleton;