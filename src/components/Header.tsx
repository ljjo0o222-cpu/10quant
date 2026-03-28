import React from 'react';
import { translations, Language, ViewMode } from '../data/content';
import { Globe, Settings, Menu, X } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  view: ViewMode;
  setView: (view: ViewMode) => void;
  themeColor: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, view, setView, themeColor }) => {
  const t = translations[lang].nav;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setView('user')}>
            <span className="text-2xl font-bold tracking-tighter text-white">
              Real<span style={{ color: themeColor }}>Quant</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {view === 'user' ? (
              <>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">{t.home}</a>
                <a href="#strategies" className="text-gray-300 hover:text-white transition-colors">{t.strategies}</a>
                <a href="#quant-strategies" className="text-gray-300 hover:text-white transition-colors">{t.quantStrategies}</a>
                <a href="#performance" className="text-gray-300 hover:text-white transition-colors">{t.performance}</a>
                <a href="#actual-returns" className="text-gray-300 hover:text-white transition-colors">{t.actualReturns}</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t.contact}</a>
              </>
            ) : (
              <span className="text-gray-300 font-medium">{translations[lang].admin.title}</span>
            )}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md border border-white/10 hover:border-white/30"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{lang === 'ko' ? 'ENG' : 'KOR'}</span>
            </button>
            <button
              onClick={() => setView(view === 'user' ? 'admin' : 'user')}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md border border-white/10 hover:border-white/30"
            >
              <Settings size={16} />
              <span className="text-sm font-medium">{view === 'user' ? t.admin : t.home}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {view === 'user' && (
              <>
                <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.home}</a>
                <a href="#strategies" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.strategies}</a>
                <a href="#quant-strategies" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.quantStrategies}</a>
                <a href="#performance" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.performance}</a>
                <a href="#actual-returns" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.actualReturns}</a>
                <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.contact}</a>
              </>
            )}
            <div className="flex space-x-4 px-3 py-4 border-t border-white/10 mt-2">
              <button
                onClick={() => { setLang(lang === 'ko' ? 'en' : 'ko'); setIsMenuOpen(false); }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <Globe size={18} />
                <span>{lang === 'ko' ? 'English' : '한국어'}</span>
              </button>
              <button
                onClick={() => { setView(view === 'user' ? 'admin' : 'user'); setIsMenuOpen(false); }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <Settings size={18} />
                <span>{view === 'user' ? t.admin : t.home}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
