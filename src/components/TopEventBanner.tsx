import React from 'react';
import { motion } from 'motion/react';
import { X, Sparkles, ChevronRight, Gift } from 'lucide-react';
import { Language } from '../data/content';

interface TopEventBannerProps {
  lang: Language;
  onClose: (hideForToday?: boolean) => void;
}

const bannerTranslations: Record<Language, { tag: string; text: string; cta: string; hideToday: string }> = {
  ko: {
    tag: 'EVENT',
    text: '30일 자동매매 무료 체험 진행중!',
    cta: '무료 체험 신청',
    hideToday: '오늘 하루 보지 않기',
  },
  en: {
    tag: 'EVENT',
    text: '30-Day Automated Trading Free Trial Now Active!',
    cta: 'Apply for Free Trial',
    hideToday: "Don't show today",
  },
  zh: {
    tag: 'EVENT',
    text: '30天自动量化交易免费体验进行中！',
    cta: '立即免费体验',
    hideToday: '今日不再提示',
  },
  ja: {
    tag: 'EVENT',
    text: '30日間自動売買無料体験キャンペーン実施中！',
    cta: '無料体験に申込む',
    hideToday: '今日は表示しない',
  },
  ru: {
    tag: 'EVENT',
    text: 'Бесплатный 30-дневный тест автоторговли уже идет!',
    cta: 'Подать заявку',
    hideToday: 'Не показывать сегодня',
  },
  de: {
    tag: 'EVENT',
    text: '30 Tage kostenloser Test für automatisierten Handel!',
    cta: 'Jetzt testen',
    hideToday: 'Heute nicht mehr anzeigen',
  },
  fr: {
    tag: 'EVENT',
    text: 'Essai gratuit de 30 jours au trading automatisé en cours !',
    cta: 'Essayer gratuitement',
    hideToday: "Ne plus afficher aujourd'hui",
  },
  hi: {
    tag: 'EVENT',
    text: '30 दिनों के लिए ऑटोमेटेड ट्रेडिंग मुफ्त ट्रायल जारी है!',
    cta: 'मुफ्त ट्रायल शुरू करें',
    hideToday: 'आज न दिखाएं',
  },
  es: {
    tag: 'EVENT',
    text: '¡Prueba gratuita de 30 días de trading automatizado activa!',
    cta: 'Solicitar prueba',
    hideToday: 'No mostrar hoy',
  },
  ar: {
    tag: 'EVENT',
    text: 'تجربة مجانية لمدة 30 يوماً للتداول الآلي جارية الآن!',
    cta: 'سجل الآن مجاناً',
    hideToday: 'عدم الإظهار اليوم',
  },
};

export const TopEventBanner: React.FC<TopEventBannerProps> = ({ lang, onClose }) => {
  const t = bannerTranslations[lang] || bannerTranslations.ko;
  const eventLink = 'https://t.me/realquant77';

  return (
    <motion.aside
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="relative z-50 bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-950 border-b border-blue-500/40 text-white overflow-hidden shadow-lg"
    >
      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 relative">
        {/* Clickable Event Message area */}
        <a
          href={eventLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 min-w-0 group hover:opacity-95 transition-opacity"
        >
          {/* Pulsing Sparkle / Gift Icon */}
          <div className="relative flex-shrink-0 flex items-center justify-center">
            <span className="relative flex h-2 w-2 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400" />
            </span>
            <Gift size={15} className="text-yellow-300 group-hover:scale-110 transition-transform duration-200 hidden sm:inline" />
          </div>

          {/* Event Tag: <EVENT> */}
          <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-500/30 text-blue-300 border border-blue-400/50 shadow-sm shrink-0">
            &lt;{t.tag}&gt;
          </span>

          {/* Main Event Text */}
          <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate group-hover:underline decoration-blue-300/60 underline-offset-2">
            {t.text}
          </span>

          {/* CTA Pill button (Desktop) */}
          <span className="hidden md:inline-flex items-center gap-1 ml-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 text-blue-950 hover:bg-white shadow-sm shrink-0 group-hover:translate-x-0.5 transition-transform">
            <span>{t.cta}</span>
            <ChevronRight size={12} />
          </span>
        </a>

        {/* Right Dismiss controls (PC + Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-1">
          {/* '오늘 하루 보지 않기' Button (PC & larger screens) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose(true);
            }}
            className="hidden sm:inline-block text-[11px] text-blue-200/80 hover:text-white transition-colors underline decoration-dotted underline-offset-2 cursor-pointer"
          >
            {t.hideToday}
          </button>

          {/* Close 'X' Button (PC + Mobile) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose(false);
            }}
            aria-label="상단 팝업 닫기"
            className="w-7 h-7 sm:w-6 sm:h-6 flex items-center justify-center rounded-full text-blue-200/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer active:scale-95"
            title="닫기"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </motion.aside>
  );
};
