import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import MarketTable from '../components/markets/MarketTable';
import SEOContent from '../components/SEOContent';

const Markets = () => {
  const { t } = useLanguage();

  const seoSections = [
    {
      title: 'Mercado de Memecoins',
      content: 'Explore o maior mercado de memecoins do mundo, com mais de 150 pares disponíveis para negociação. Acompanhe preços, volume e variações em tempo real.'
    },
    {
      title: 'Análise de Mercado',
      content: 'Utilize nossas ferramentas profissionais de análise técnica para identificar tendências e oportunidades. Gráficos avançados e indicadores em tempo real para decisões precisas.'
    },
    {
      title: 'Liquidez Global',
      content: 'Opere com a melhor liquidez do mercado, garantindo execução instantânea e preços competitivos. Nossa rede global de parceiros assegura spread reduzido em todas as operações.'
    },
    {
      title: 'Gestão de Risco',
      content: 'Ferramentas avançadas de gestão de risco, incluindo stop loss, take profit e ordens condicionais. Proteja seus investimentos com recursos profissionais de trading.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">{t('markets.title')}</h1>
        <MarketTable />
        <SEOContent 
          title="Mercado de Criptomoedas em Tempo Real"
          sections={seoSections}
        />
      </div>
    </div>
  );
};

export default Markets;