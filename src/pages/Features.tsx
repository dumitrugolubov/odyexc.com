import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Zap, Coins, BarChart3 } from 'lucide-react';
import SEOContent from '../components/SEOContent';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: t('features.security.title'),
      description: t('features.security.description')
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: t('features.speed.title'),
      description: t('features.speed.description')
    },
    {
      icon: <Coins className="w-12 h-12 text-blue-500" />,
      title: t('features.liquidity.title'),
      description: t('features.liquidity.description')
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      title: t('features.trading.title'),
      description: t('features.trading.description')
    }
  ];

  const seoSections = [
    {
      title: 'Tecnologia de Ponta',
      content: 'Nossa plataforma utiliza tecnologia de última geração para garantir operações rápidas e seguras. Sistema escalável processando milhões de transações por segundo.'
    },
    {
      title: 'Ferramentas Profissionais',
      content: 'Suite completa de ferramentas para análise técnica e fundamentalista. Gráficos avançados, indicadores personalizáveis e alertas em tempo real.'
    },
    {
      title: 'Segurança Institucional',
      content: 'Proteção de ativos com tecnologia militar, incluindo cold storage, criptografia avançada e autenticação multi-fator. Auditoria contínua por empresas líderes em segurança.'
    },
    {
      title: 'Suporte Especializado',
      content: 'Equipe de suporte disponível 24/7 em múltiplos idiomas. Atendimento personalizado para resolver suas dúvidas e auxiliar em suas operações.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12">Recursos Avançados</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition">
              {feature.icon}
              <h3 className="text-xl font-bold text-white mt-4">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
        <SEOContent 
          title="Recursos Avançados para Trading de Criptomoedas"
          sections={seoSections}
        />
      </div>
    </div>
  );
};

export default Features;