import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('support.faq.trading.question'),
      answer: t('support.faq.trading.answer')
    },
    {
      question: t('support.faq.fees.question'),
      answer: t('support.faq.fees.answer')
    },
    {
      question: t('support.faq.security.question'),
      answer: t('support.faq.security.answer')
    },
    {
      question: t('support.faq.account.question'),
      answer: t('support.faq.account.answer')
    }
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">{t('support.faq.title')}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-800 rounded-lg">
              <span className="font-medium text-white">{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-2 text-gray-400 p-4">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;