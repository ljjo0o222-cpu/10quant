import React from 'react';
import { translations, Language, ViewMode } from '../data/content';
import { whyRealQuantTranslations } from '../data/whyRealQuant';
import { Globe, Settings, Menu, X } from 'lucide-react';
import { TopEventBanner } from './TopEventBanner';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  view: ViewMode;
  setView: (view: ViewMode) => void;
  themeColor: string;
  onOpenCalculator?: () => void;
  isBannerVisible?: boolean;
  onCloseBanner?: (hideToday?: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  lang, 
  setLang, 
  view, 
  setView, 
  themeColor, 
  onOpenCalculator,
  isBannerVisible,
  onCloseBanner
}) => {
  const t = translations[lang].nav;
  const whyNav = whyRealQuantTranslations[lang]?.navTitle || whyRealQuantTranslations.ko.navTitle;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const langMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const mobileInquiryLabels: Record<string, string> = {
    ko: '1:1 문의하기',
    en: '1:1 Inquiry',
    zh: '1:1 咨询',
    ja: '1:1 お問合せ',
    ru: 'Чат 1:1',
    de: '1:1 Support',
    fr: 'Support 1:1',
    hi: '1:1 सहायता',
    es: 'Soporte 1:1',
    ar: 'استفسار 1:1',
  };

  const telegramUrl = 'https://t.me/realquant77';

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      {isBannerVisible && view === 'user' && (
        <TopEventBanner 
          lang={lang} 
          onClose={(hideToday) => onCloseBanner?.(hideToday)} 
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Mobile 1:1 Live Inquiry */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setView('user')}>
              <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
                Real<span style={{ color: themeColor }}>Quant</span>
              </span>
            </div>

            {/* Mobile 1:1 Live Inquiry Button next to logo */}
            {view === 'user' && (
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-header-inquiry-btn"
                className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/40 hover:border-blue-400 text-blue-300 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer shrink-0"
                title="1:1 문의하기 (새 창 열림)"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <svg className="w-3.5 h-3.5 fill-current text-blue-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.17 3.35-1.37 3.73-1.38.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
                </svg>
                <span className="whitespace-nowrap">
                  {mobileInquiryLabels[lang] || '1:1 문의하기'}
                </span>
              </a>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-2.5 lg:space-x-6 xl:space-x-8 items-center">
            {view === 'user' ? (
              <>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap md:text-xs lg:text-base">{t.home}</a>
                <a href="#why-realquant" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap md:text-xs lg:text-base">{whyNav}</a>
                <a href="#strategies" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap md:text-xs lg:text-base">{t.strategies}</a>
                <a href="#performance" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap md:text-xs lg:text-base">{t.performance}</a>
                <a href="#actual-returns" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap md:text-xs lg:text-base">{t.actualReturns}</a>
                <a href="#partners" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap md:text-xs lg:text-base">{t.partners}</a>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors whitespace-nowrap md:text-xs lg:text-base">{t.faq || 'FAQ'}</a>
                <button
                  type="button"
                  onClick={() => onOpenCalculator?.()}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5 px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 cursor-pointer whitespace-nowrap md:text-xs lg:text-base"
                >
                  <span>{t.calculator || '월복리 계산기'}</span>
                </button>
              </>
            ) : (
              <span className="text-gray-300 font-medium whitespace-nowrap md:text-xs lg:text-base">{translations[lang].admin.title}</span>
            )}
          </nav>

          {/* Actions (Desktop & Mobile) */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div ref={langMenuRef} className="relative group">
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
                </button>

                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-left px-3 py-2 text-base font-semibold text-blue-400 hover:text-blue-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>{mobileInquiryLabels[lang] || '1:1 문의하기'}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">TELEGRAM</span>
                </a>
                
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
