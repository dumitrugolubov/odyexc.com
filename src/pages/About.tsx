import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOContent from '../components/SEOContent';

const About = () => {
  const { t } = useLanguage();

  const seoSections = [
    {
      title: 'Nossa História',
      content: 'A Odyssey Exchange nasceu da visão de democratizar o acesso ao mercado de memecoins. Pioneiros em oferecer uma plataforma especializada com taxa zero e ferramentas profissionais.'
    },
    {
      title: 'Compromisso com Inovação',
      content: 'Investimos constantemente em tecnologia e inovação para oferecer a melhor experiência de trading. Nossa plataforma é desenvolvida por especialistas em blockchain e mercado financeiro.'
    },
    {
      title: 'Impacto Global',
      content: 'Presente em mais de 100 países, a Odyssey Exchange lidera o mercado de memecoins com volume diário superior a $100 milhões. Nossa comunidade global cresce diariamente.'
    },
    {
      title: 'Valores e Princípios',
      content: 'Transparência, segurança e inovação são os pilares que guiam nossa operação. Comprometidos com a regulamentação e as melhores práticas do mercado.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">{t('about.title')}</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 text-lg">{t('about.description')}</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-300">{t('about.mission.description')}</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{t('about.vision.title')}</h2>
            <p className="text-gray-300">{t('about.vision.description')}</p>
          </div>
        </div>
      </div>
      <SEOContent 
        title="Conheça a Odyssey Exchange"
        sections={seoSections}
      />
    </div>
  );
};

export default About;