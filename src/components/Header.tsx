import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            ODYSSEY<span className="text-blue-500">EXCHANGE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/exchange" className="text-white hover:text-blue-500 transition">
              {t('header.exchange')}
            </Link>
            <Link to="/markets" className="text-white hover:text-blue-500 transition">
              {t('header.markets')}
            </Link>
            <Link to="/features" className="text-white hover:text-blue-500 transition">
              {t('header.features')}
            </Link>
            <Link to="/about" className="text-white hover:text-blue-500 transition">
              {t('header.about')}
            </Link>
            <Link to="/support" className="text-white hover:text-blue-500 transition">
              {t('header.support')}
            </Link>
            <a 
              href="https://ody.lol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {t('header.tradeNow')}
            </a>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/exchange" className="block text-white hover:text-blue-500 transition">
              {t('header.exchange')}
            </Link>
            <Link to="/markets" className="block text-white hover:text-blue-500 transition">
              {t('header.markets')}
            </Link>
            <Link to="/features" className="block text-white hover:text-blue-500 transition">
              {t('header.features')}
            </Link>
            <Link to="/about" className="block text-white hover:text-blue-500 transition">
              {t('header.about')}
            </Link>
            <Link to="/support" className="block text-white hover:text-blue-500 transition">
              {t('header.support')}
            </Link>
            <a 
              href="https://ody.lol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
            >
              {t('header.tradeNow')}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;