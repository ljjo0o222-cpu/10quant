import React from 'react';
import { translations, Language, ViewMode } from '../data/content';
import { Settings } from 'lucide-react';

interface FooterProps {
  lang: Language;
  themeColor: string;
  view: ViewMode;
  setView: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, themeColor, view, setView }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 flex flex-col justify-between items-center">
          <p className="text-gray-500 text-xs text-center max-w-4xl mb-8 leading-relaxed whitespace-pre-line">
            {t.disclaimer}
          </p>
          <div className="w-full flex flex-col items-center space-y-4">
            <p className="text-gray-500 text-sm">{t.rights}</p>
            <button
              onClick={() => setView(view === 'user' ? 'admin' : 'user')}
              className="text-gray-700 hover:text-gray-500 transition-colors p-2"
              title="Admin Settings"
            >
              <Settings size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
