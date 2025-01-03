import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEOContent from '../components/SEOContent';

const Exchange = () => {
  const { t } = useLanguage();

  const seoSections = [
    {
      title: 'Plataforma Líder em Memecoins',
      content: 'A Odyssey Exchange é a primeira e única exchange especializada em memecoins, oferecendo mais de 150 pares de trading com taxa zero. Nossa plataforma combina segurança institucional com ferramentas avançadas de trading.'
    },
    {
      title: 'Trading Profissional',
      content: 'Opere com confiança usando nossas ferramentas profissionais de análise técnica, gráficos avançados e indicadores em tempo real. Aproveite a alavancagem de até 777x para maximizar seus resultados.'
    },
    {
      title: 'Liquidez e Execução',
      content: 'Beneficie-se da melhor liquidez do mercado com execução instantânea de ordens. Nossa rede global de parceiros garante os melhores preços e spread reduzido em todas as operações.'
    },
    {
      title: 'Segurança Máxima',
      content: 'Seus ativos estão protegidos por tecnologia de ponta, incluindo armazenamento em cold storage, autenticação de dois fatores e monitoramento 24/7. Opere com tranquilidade em um ambiente totalmente regulamentado.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('exchange.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            {t('exchange.subtitle')}
          </p>
          <a 
            href="https://ody.lol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2"
          >
            {t('exchange.startTrading')} <ArrowRight size={20} />
          </a>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">{t('exchange.features.zeroFees.title')}</h3>
            <p className="text-gray-300">{t('exchange.features.zeroFees.description')}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">{t('exchange.features.liquidity.title')}</h3>
            <p className="text-gray-300">{t('exchange.features.liquidity.description')}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-3">{t('exchange.features.tools.title')}</h3>
            <p className="text-gray-300">{t('exchange.features.tools.description')}</p>
          </div>
        </section>

        <SEOContent 
          title="Por que Escolher a Odyssey Exchange para Trading de Memecoins?"
          sections={seoSections}
        />
      </div>
    </div>
  );
};

export default Exchange;