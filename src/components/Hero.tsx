import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Wallet, BarChart4, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOContent from './SEOContent';

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const seoSections = [
    {
      title: 'Plataforma Pioneira',
      content: 'A primeira exchange focada em memecoins do mundo, oferecendo uma experiência única de trading com taxa zero em operações spot.'
    },
    {
      title: 'Segurança Máxima',
      content: 'Proteção de ativos com tecnologia militar, incluindo cold storage e criptografia avançada. Auditoria contínua por empresas líderes em segurança.'
    },
    {
      title: 'Ferramentas Profissionais',
      content: 'Suite completa de ferramentas para análise técnica e fundamentalista. Gráficos avançados e indicadores em tempo real.'
    },
    {
      title: 'Suporte Global',
      content: 'Equipe de suporte disponível 24/7 em múltiplos idiomas. Atendimento personalizado para todas suas necessidades.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              {t('hero.title')}{' '}
              <span className="text-blue-500">{t('hero.titleHighlight')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <a 
                href="https://ody.lol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition group"
              >
                {t('hero.startTrading')}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              variants={itemVariants}
            >
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">0%</div>
                <div className="text-gray-400">{t('hero.stats.spotFees')}</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">777x</div>
                <div className="text-gray-400">{t('hero.stats.leverage')}</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-gray-400">{t('hero.stats.pairs')}</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">{t('hero.stats.support')}</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
          >
            <motion.div
              className="space-y-4"
              variants={itemVariants}
              custom={1}
            >
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
                <Shield className="w-8 h-8 text-blue-500 mb-2" />
                <div className="font-semibold text-white">{t('hero.features.security')}</div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
                <Wallet className="w-8 h-8 text-blue-500 mb-2" />
                <div className="font-semibold text-white">{t('hero.features.liquidity')}</div>
              </div>
            </motion.div>
            <motion.div
              className="space-y-4 mt-8"
              variants={itemVariants}
              custom={2}
            >
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
                <BarChart4 className="w-8 h-8 text-blue-500 mb-2" />
                <div className="font-semibold text-white">{t('hero.features.tools')}</div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition">
                <Clock className="w-8 h-8 text-blue-500 mb-2" />
                <div className="font-semibold text-white">{t('hero.features.support')}</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <SEOContent 
          title={t('seoContent.title')}
          sections={seoSections}
        />
      </div>
    </div>
  );
};

export default Hero;