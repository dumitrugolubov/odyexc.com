import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Exchange from './pages/Exchange';
import Features from './pages/Features';
import Markets from './pages/Markets';
import About from './pages/About';
import Support from './pages/Support';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/features" element={<Features />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;