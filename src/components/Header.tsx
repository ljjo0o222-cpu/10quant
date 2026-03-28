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
                <a href="#performance" className="text-gray-300 hover:text-white transition-colors">{t.performance}</a>
                <a href="#actual-returns" className="text-gray-300 hover:text-white transition-colors">{t.actualReturns}</a>
                <a href="#partners" className="text-gray-300 hover:text-white transition-colors">{t.partners}</a>
              </>
            ) : (
              <span className="text-gray-300 font-medium">{translations[lang].admin.title}</span>
            )}
          </nav>

          {/* Actions (Desktop & Mobile) */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors px-2 py-1.5 md:px-3 md:py-2 rounded-md border border-white/10 hover:border-white/30"
              >
                <Globe size={16} />
                <span className="text-xs md:text-sm font-medium uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 md:w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="py-1 grid grid-cols-1 max-h-[70vh] overflow-y-auto">
                  {[
                    { code: 'ko', name: '한국어' },
                    { code: 'en', name: 'English' },
                    { code: 'zh', name: '中文' },
                    { code: 'ja', name: '日本語' },
                    { code: 'ru', name: 'Русский' },
                    { code: 'de', name: 'Deutsch' },
                    { code: 'fr', name: 'Français' },
                    { code: 'hi', name: '히न्दी' },
                    { code: 'es', name: 'Español' },
                    { code: 'ar', name: 'العربية' },
                  ].map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code as Language)}
                      className={`px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors ${lang === l.code ? 'text-white font-bold' : 'text-gray-400'}`}
                      style={lang === l.code ? { color: themeColor } : {}}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {view === 'user' && (
              <>
                <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.home}</a>
                <a href="#strategies" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.strategies}</a>
                <a href="#performance" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.performance}</a>
                <a href="#actual-returns" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.actualReturns}</a>
                <a href="#partners" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.partners}</a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
