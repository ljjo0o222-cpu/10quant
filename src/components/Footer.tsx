import React from 'react';
import { translations, Language, ViewMode } from '../data/content';
import {
  Settings,
  Send,
  Youtube,
  Instagram,
  Music2,
  AtSign,
  Twitter,
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  themeColor: string;
  view: ViewMode;
  setView: (view: ViewMode) => void;
}

interface SnsItem {
  id: string;
  name: string;
  url: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  hoverColor: string;
}

const SNS_LINKS: SnsItem[] = [
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/realquant7',
    icon: Send,
    hoverColor: 'group-hover:text-[#229ED9]',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@realquant',
    icon: Youtube,
    hoverColor: 'group-hover:text-[#FF0000]',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/realquant.top',
    icon: Instagram,
    hoverColor: 'group-hover:text-[#E1306C]',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@realquant7',
    icon: Music2,
    hoverColor: 'group-hover:text-[#00f2fe]',
  },
  {
    id: 'threads',
    name: 'Threads',
    url: 'https://www.threads.com/@realquant.top',
    icon: AtSign,
    hoverColor: 'group-hover:text-white',
  },
  {
    id: 'x',
    name: 'X',
    url: 'https://x.com/realquant7',
    icon: Twitter,
    hoverColor: 'group-hover:text-[#1DA1F2]',
  },
];

export const Footer: React.FC<FooterProps> = ({ lang, themeColor, view, setView }) => {
  const t = translations[lang].footer;

  return (
    <footer id="main-footer" className="bg-black border-t border-white/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 mb-5">
            <img
              id="footer-brand-logo-img"
              src="/logo.png"
              alt="RealQuant"
              className="h-9 sm:h-10 w-auto object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-mono">
              Real<span style={{ color: themeColor }}>Quant</span>
            </span>
          </div>

          {/* SNS Channels (Small, sleek, and ordered) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
            {SNS_LINKS.map((sns) => {
              const Icon = sns.icon;
              return (
                <a
                  key={sns.id}
                  id={`footer-sns-link-${sns.id}`}
                  href={sns.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800/90 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_10px_rgba(0,0,0,0.5)] active:translate-y-0"
                  aria-label={sns.name}
                >
                  <Icon size={14} className={`transition-colors duration-200 ${sns.hoverColor}`} />
                  <span className="text-[11px] sm:text-xs font-medium tracking-tight">
                    {sns.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="text-zinc-500 text-xs text-center max-w-4xl mb-6 leading-relaxed whitespace-pre-line break-keep border-t border-white/5 pt-6">
            {t.disclaimer}
          </p>

          {/* Rights & Admin Settings */}
          <div className="w-full flex items-center justify-center gap-2 text-zinc-500 text-xs sm:text-sm">
            <p>{t.rights}</p>
            <button
              id="footer-admin-btn"
              onClick={() => setView(view === 'user' ? 'admin' : 'user')}
              className="text-zinc-600 hover:text-zinc-400 transition-colors p-1.5 rounded hover:bg-zinc-900"
              title="Admin Settings"
            >
              <Settings size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
