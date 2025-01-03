import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SupportForm from '../components/support/SupportForm';
import FAQSection from '../components/support/FAQSection';
import SEOContent from '../components/SEOContent';

const Support = () => {
  const { t } = useLanguage();

  const seoSections = [
    {
      title: 'Suporte Especializado',
      content: 'Nossa equipe de suporte está disponível 24/7 para ajudar em todas as suas necessidades. Profissionais especializados em trading e tecnologia blockchain.'
    },
    {
      title: 'Centro de Ajuda',
      content: 'Acesse nossa base de conhecimento completa com tutoriais, guias e documentação detalhada. Recursos educacionais para todos os níveis de experiência.'
    },
    {
      title: 'Segurança e Proteção',
      content: 'Saiba como proteger sua conta e ativos com nossas diretrizes de segurança. Implementamos as melhores práticas do mercado para sua proteção.'
    },
    {
      title: 'Comunidade Global',
      content: 'Faça parte de nossa comunidade global de traders. Participe de discussões, webinars e eventos exclusivos para membros da Odyssey Exchange.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white mb-8">{t('support.title')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FAQSection />
          <SupportForm />
        </div>
        <SEOContent 
          title="Suporte e Recursos para Traders"
          sections={seoSections}
        />
      </div>
    </div>
  );
};

export default Support;