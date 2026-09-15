import React from 'react';
import { translations, Language, ViewMode } from '../data/content';
import { whyRealQuantTranslations } from '../data/whyRealQuant';
import { Globe, Settings, Menu, X } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  view: ViewMode;
  setView: (view: ViewMode) => void;
  themeColor: string;
  onOpenCalculator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, view, setView, themeColor, onOpenCalculator }) => {
  const t = translations[lang].nav;
  const whyNav = whyRealQuantTranslations[lang]?.navTitle || whyRealQuantTranslations.ko.navTitle;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);

  const langList = [
    { code: 'ko', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ru', name: 'Русский' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' },
  ];

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
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {view === 'user' ? (
              <>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">{t.home}</a>
                <a href="#why-realquant" className="text-gray-300 hover:text-white transition-colors">{whyNav}</a>
                <a href="#strategies" className="text-gray-300 hover:text-white transition-colors">{t.strategies}</a>
                <a href="#performance" className="text-gray-300 hover:text-white transition-colors">{t.performance}</a>
                <a href="#actual-returns" className="text-gray-300 hover:text-white transition-colors">{t.actualReturns}</a>
                <a href="#partners" className="text-gray-300 hover:text-white transition-colors">{t.partners}</a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">{t.faq || 'FAQ'}</a>
                <button
                  type="button"
                  onClick={() => onOpenCalculator?.()}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 cursor-pointer"
                >
                  <span>{t.calculator || '월복리 계산기'}</span>
                  <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300">POPUP</span>
                </button>
              </>
            ) : (
              <span className="text-gray-300 font-medium">{translations[lang].admin.title}</span>
            )}
          </nav>

          {/* Actions (Desktop & Mobile) */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative group">
              <button
                type="button"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors px-2 py-1.5 md:px-3 md:py-2 rounded-md border border-white/10 hover:border-white/30 cursor-pointer"
                aria-label="Language selector"
              >
                <Globe size={16} />
                <span className="text-xs md:text-sm font-semibold uppercase">{lang}</span>
              </button>
              <div 
                className={`absolute right-0 mt-2 w-40 md:w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl transition-all duration-200 z-50 overflow-hidden ${
                  isLangMenuOpen 
                    ? 'opacity-100 visible' 
                    : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                }`}
              >
                <div className="py-1 grid grid-cols-1 max-h-[70vh] overflow-y-auto">
                  {langList.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLang(l.code as Language);
                        setIsLangMenuOpen(false);
                      }}
                      className={`px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors flex items-center justify-between cursor-pointer ${
                        lang === l.code ? 'text-white font-bold bg-white/5' : 'text-gray-400'
                      }`}
                      style={lang === l.code ? { color: themeColor } : {}}
                    >
                      <span>{l.name}</span>
                      {lang === l.code && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2 cursor-pointer"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10 max-h-[85vh] overflow-y-auto">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {view === 'user' && (
              <>
                <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.home}</a>
                <a href="#why-realquant" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{whyNav}</a>
                <a href="#strategies" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.strategies}</a>
                <a href="#performance" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.performance}</a>
                <a href="#actual-returns" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.actualReturns}</a>
                <a href="#partners" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.partners}</a>
                <a href="#faq" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t.faq || 'FAQ'}</a>
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenCalculator?.();
                  }}
                  className="w-full text-left px-3 py-2 text-base font-semibold text-emerald-400 hover:text-emerald-300 flex items-center justify-between"
                >
                  <span>{t.calculator || '월복리 계산기'}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">POPUP</span>
                </button>
                
                {/* Mobile Language Grid */}
                <div className="pt-3 mt-3 border-t border-white/10">
                  <div className="px-3 pb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Globe size={13} />
                    <span>Language ({lang.toUpperCase()})</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 px-1">
                    {langList.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => {
                          setLang(l.code as Language);
                          setIsMenuOpen(false);
                        }}
                        className={`px-3 py-2 text-xs rounded-lg text-left transition-colors flex items-center justify-between ${
                          lang === l.code 
                            ? 'bg-white/15 text-white font-bold' 
                            : 'bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800'
                        }`}
                        style={lang === l.code ? { borderColor: themeColor } : {}}
                      >
                        <span>{l.name}</span>
                        <span className="text-[10px] uppercase font-mono opacity-60">{l.code}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
