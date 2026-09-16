import React from 'react';
import { Language } from '../data/content';
import { ExternalLink } from 'lucide-react';

interface FloatingTelegramInquiryProps {
  lang: Language;
  themeColor?: string;
}

const liveInquiryMap: Record<string, { label: string; stacked: string[]; tooltip: string }> = {
  ko: {
    label: '1:1 문의하기',
    stacked: ['1:1', '문의', '하기'],
    tooltip: '1:1 문의하기',
  },
  en: {
    label: '1:1 Inquiry',
    stacked: ['1:1', 'Live', 'Inquiry'],
    tooltip: 'Telegram 1:1 Inquiry',
  },
  zh: {
    label: '1:1 咨询',
    stacked: ['1:1', '在线', '咨询'],
    tooltip: 'Telegram 1:1 咨询',
  },
  ja: {
    label: '1:1 お問合せ',
    stacked: ['1:1', 'お問', '合せ'],
    tooltip: 'Telegram 1:1 お問合せ',
  },
  ru: {
    label: 'Чат 1:1',
    stacked: ['1:1', 'Чат', 'Онлайн'],
    tooltip: 'Telegram 1:1 Поддержка',
  },
  de: {
    label: '1:1 Support',
    stacked: ['1:1', 'Live', 'Support'],
    tooltip: 'Telegram 1:1 Support',
  },
  fr: {
    label: 'Support 1:1',
    stacked: ['1:1', 'Support', 'Direct'],
    tooltip: 'Telegram Support 1:1',
  },
  hi: {
    label: '1:1 सहायता',
    stacked: ['1:1', 'लाइव', 'सहायता'],
    tooltip: 'Telegram 1:1 सहायता',
  },
  es: {
    label: 'Soporte 1:1',
    stacked: ['1:1', 'Soporte', 'En Vivo'],
    tooltip: 'Telegram Soporte 1:1',
  },
  ar: {
    label: 'استفسار 1:1',
    stacked: ['1:1', 'استفسار', 'مباشر'],
    tooltip: 'Telegram استفسار 1:1',
  },
};

export const FloatingTelegramInquiry: React.FC<FloatingTelegramInquiryProps> = ({ lang }) => {
  const current = liveInquiryMap[lang] || liveInquiryMap.ko;
  const telegramUrl = 'https://t.me/realquant77';

  return (
    <aside aria-label="Quick Live Inquiry" className="hidden md:block">
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="pc-realtime-inquiry-btn"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group flex flex-col items-center w-[54px] lg:w-[58px] py-4 px-1 rounded-l-2xl border-l border-y border-blue-500/40 hover:border-blue-400 bg-zinc-950/90 hover:bg-zinc-900/98 backdrop-blur-md shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-x-1.5 cursor-pointer text-decoration-none select-none"
        title={`${current.label} (새 창 열림)`}
      >
        {/* Pulsing Live Badge */}
        <div className="flex flex-col items-center gap-0.5 mb-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[8px] font-extrabold tracking-wider text-emerald-400 uppercase leading-none">
            LIVE
          </span>
        </div>

        {/* Telegram Paper Plane Icon */}
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-400 flex items-center justify-center text-white shadow-md shadow-blue-500/30 my-1.5 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4 fill-current ml-[-1px] mt-[1px]" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.17 3.35-1.37 3.73-1.38.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
          </svg>
        </div>

        {/* Stacked Label: "1:1 문의하기" */}
        <div className="flex flex-col items-center leading-[1.25] text-center font-bold tracking-tight my-1">
          <span className="text-[11px] text-blue-400 group-hover:text-blue-300 transition-colors">
            {current.stacked[0]}
          </span>
          <span className="text-[12px] text-white group-hover:text-white transition-colors">
            {current.stacked[1]}
          </span>
          <span className="text-[11px] text-zinc-300 group-hover:text-white transition-colors">
            {current.stacked[2]}
          </span>
        </div>

        {/* Subtle External Icon */}
        <div className="mt-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-400">
          <ExternalLink size={11} />
        </div>

        {/* Desktop Hover Tooltip (Pops out to the left) */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center pointer-events-none z-50">
          <div className="bg-zinc-900/95 border border-blue-500/40 px-3.5 py-2 rounded-xl shadow-2xl whitespace-nowrap text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{current.tooltip}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
              t.me/realquant77
            </span>
          </div>
          <div className="w-2 h-2 bg-zinc-900 border-r border-b border-blue-500/40 transform -rotate-45 -ml-1"></div>
        </div>
      </a>
    </aside>
  );
};
