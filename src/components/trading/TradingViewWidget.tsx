import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (container.current) {
        new window.TradingView.widget({
          container_id: container.current.id,
          symbol: 'BINANCE:BTCUSDT',
          interval: '1D',
          timezone: 'America/Sao_Paulo',
          theme: 'dark',
          style: '1',
          locale: 'pt_BR',
          toolbar_bg: '#1E1E1E',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: true,
          hotlist: true,
          calendar: true,
          width: '100%',
          height: '600',
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div id="tradingview_widget" ref={container} className="rounded-lg overflow-hidden" />;
};

export default TradingViewWidget;