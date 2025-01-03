import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
    { code: 'pt-PT', name: 'Português (Portugal)', flag: '🇵🇹' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-white hover:text-blue-500 transition">
        <Globe size={20} />
        <span className="hidden md:inline">{language === 'pt-BR' ? '🇧🇷' : '🇵🇹'}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`${
                language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              } group flex items-center w-full px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;