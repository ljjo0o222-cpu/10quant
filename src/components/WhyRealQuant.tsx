import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  TrendingDown, 
  TrendingUp, 
  Zap, 
  RefreshCw, 
  Clock, 
  ArrowRight,
  Flame,
  CheckCircle2,
  XCircle,
  Calculator,
  Compass
} from 'lucide-react';
import { Language } from '../data/content';
import { whyRealQuantTranslations } from '../data/whyRealQuant';

interface WhyRealQuantProps {
  lang: Language;
  themeColor: string;
  onOpenCalculator?: () => void;
}

export const WhyRealQuant: React.FC<WhyRealQuantProps> = ({ lang, themeColor, onOpenCalculator }) => {
  const t = whyRealQuantTranslations[lang] || whyRealQuantTranslations.ko;

  return (
    <section id="why-realquant" className="relative py-20 sm:py-28 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div 
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />
      <div 
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none bg-emerald-500"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Compass size={14} />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 break-keep">
            {t.title}
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-5" style={{ backgroundColor: themeColor }}></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed break-keep">
            {t.subtitle}
          </p>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* PART 1: The Emotional Loop vs Rule-based Quant (Diagram/Card) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 break-keep">
              {t.section1Title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto break-keep">
              {t.section1Subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* LEFT CARD: Human Trader Emotional Trap */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-gradient-to-b from-red-950/20 via-zinc-900/60 to-zinc-950 border border-red-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-sm"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-[11px] sm:text-xs font-semibold">
                <AlertTriangle size={13} />
                <span>{t.humanLoop.tag}</span>
              </div>

              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider font-mono text-red-400/80 font-bold block mb-1">
                    VICIOUS CYCLE
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 break-keep">
                    <span>{t.humanLoop.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 break-keep">
                    {t.humanLoop.description}
                  </p>
                </div>

                {/* 4-Step Diagram Flow */}
                <div className="space-y-3.5 relative mb-8">
                  {t.humanLoop.steps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="relative flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-900/70 border border-red-500/15 hover:border-red-500/35 transition-all group"
                    >
                      {/* Step Number Badge */}
                      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center font-mono font-bold text-xs sm:text-sm shadow-inner">
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-red-300 transition-colors">
                            {step.title}
                          </h5>
                          <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 whitespace-nowrap">
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-keep">
                          {step.desc}
                        </p>
                      </div>

                      {/* Flow Connector Arrow */}
                      {idx < t.humanLoop.steps.length - 1 && (
                        <div className="absolute -bottom-2 left-7 sm:left-8 -translate-x-1/2 text-red-500/40 z-10">
                          <TrendingDown size={12} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Insight Box */}
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-3">
                <XCircle className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs sm:text-sm text-red-200 leading-relaxed font-medium break-keep">
                  {t.humanLoop.summary}
                </p>
              </div>
            </motion.div>

            {/* RIGHT CARD: RealQuant Rule-based System */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-gradient-to-b from-emerald-950/25 via-zinc-900/60 to-zinc-950 border border-emerald-500/40 p-6 sm:p-8 shadow-2xl backdrop-blur-sm"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[11px] sm:text-xs font-semibold">
                <ShieldCheck size={13} />
                <span>{t.quantSystem.tag}</span>
              </div>

              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider font-mono text-emerald-400/90 font-bold block mb-1">
                    PRECISION EXECUTION
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 break-keep">
                    <span>{t.quantSystem.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 break-keep">
                    {t.quantSystem.description}
                  </p>
                </div>

                {/* 4-Step Diagram Flow */}
                <div className="space-y-3.5 relative mb-8">
                  {t.quantSystem.steps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="relative flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-900/70 border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                    >
                      {/* Step Number Badge */}
                      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs sm:text-sm shadow-inner">
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                            {step.title}
                          </h5>
                          <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-keep">
                          {step.desc}
                        </p>
                      </div>

                      {/* Flow Connector Arrow */}
                      {idx < t.quantSystem.steps.length - 1 && (
                        <div className="absolute -bottom-2 left-7 sm:left-8 -translate-x-1/2 text-emerald-500/40 z-10">
                          <TrendingUp size={12} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Insight Box */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-medium break-keep">
                  {t.quantSystem.summary}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* PART 2: Short-term Hype Bots vs Long-term Proven Quant (Comparison) */}
        {/* ------------------------------------------------------------------- */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Zap size={13} />
              <span>{t.section2Badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 break-keep">
              {t.section2Title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 break-keep">
              {t.section2Subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* COMPARISON 1: Flash In The Pan / Short-Term Hype */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl sm:rounded-3xl bg-zinc-900/80 border border-red-500/30 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] sm:text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                    {t.shortTermHype.badge}
                  </span>
                  <span className="text-xs font-bold text-red-400/90 flex items-center gap-1">
                    <Flame size={14} />
                    <span>HIGH RISK</span>
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 break-keep">
                  {t.shortTermHype.title}
                </h4>
                <p className="text-sm font-semibold text-red-300 mb-6 break-keep">
                  {t.shortTermHype.headline}
                </p>

                {/* SVG Visual Graphic: Spike and crash */}
                <div className="p-4 rounded-xl bg-black/50 border border-red-500/20 mb-6">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                    <span className="font-mono text-[11px]">{t.shortTermHype.graphLabel}</span>
                    <span className="text-red-400 font-bold font-mono text-[11px]">LIQUIDATION</span>
                  </div>
                  <div className="h-24 w-full relative flex items-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="#ffffff10" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#ffffff10" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="300" y2="75" stroke="#ffffff20" />
                      
                      {/* Trajectory: Rapid steep climb, then vertical plummet */}
                      <path
                        d="M 0,65 Q 40,60 80,45 T 160,15 L 200,8 L 220,78 L 300,78"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Peak point */}
                      <circle cx="200" cy="8" r="4" fill="#ef4444" className="animate-ping" />
                      <circle cx="200" cy="8" r="4" fill="#ef4444" />

                      {/* Drop point */}
                      <circle cx="220" cy="78" r="4" fill="#ef4444" />
                    </svg>

                    {/* Annotations */}
                    <div className="absolute top-1 left-2/3 -translate-x-1/2 text-[10px] font-bold text-red-400 bg-red-950/80 px-1.5 py-0.5 rounded border border-red-500/40">
                      +100% 과장
                    </div>
                    <div className="absolute bottom-1 right-1 text-[10px] font-bold text-red-500 bg-black/90 px-1.5 py-0.5 rounded border border-red-500/50">
                      전액 청산 (0원)
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {t.shortTermHype.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="break-keep">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Outcome */}
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider font-mono">
                  {t.shortTermHype.resultLabel}
                </span>
                <span className="text-xs sm:text-sm text-red-200 font-semibold text-right break-keep">
                  {t.shortTermHype.resultText}
                </span>
              </div>
            </motion.div>

            {/* COMPARISON 2: RealQuant Proven Long-Term Alpha */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl sm:rounded-3xl bg-zinc-900/80 border border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-emerald-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] sm:text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/40">
                    {t.realQuantProof.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck size={14} />
                    <span>5-YEAR BACKTEST</span>
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 break-keep">
                  {t.realQuantProof.title}
                </h4>
                <p className="text-sm font-semibold text-emerald-400 mb-6 break-keep">
                  {t.realQuantProof.headline}
                </p>

                {/* SVG Visual Graphic: Steady upward compounding curve */}
                <div className="p-4 rounded-xl bg-black/50 border border-emerald-500/20 mb-6">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                    <span className="font-mono text-[11px]">{t.realQuantProof.graphLabel}</span>
                    <span className="text-emerald-400 font-bold font-mono text-[11px]">COMPOUNDING</span>
                  </div>
                  <div className="h-24 w-full relative flex items-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="#ffffff10" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#ffffff10" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="300" y2="75" stroke="#ffffff20" />
                      
                      {/* Trajectory: Smooth, steady compounding upward slope with controlled dips */}
                      <path
                        d="M 0,72 Q 50,68 90,60 T 170,45 T 230,26 T 300,8"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Gradient fill underneath */}
                      <path
                        d="M 0,72 Q 50,68 90,60 T 170,45 T 230,26 T 300,8 L 300,75 L 0,75 Z"
                        fill="url(#emeraldGradient)"
                        opacity="0.25"
                      />

                      <defs>
                        <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Milestone dots */}
                      <circle cx="90" cy="60" r="3.5" fill="#10b981" />
                      <circle cx="170" cy="45" r="3.5" fill="#10b981" />
                      <circle cx="230" cy="26" r="3.5" fill="#10b981" />
                      <circle cx="300" cy="8" r="4.5" fill="#34d399" className="animate-pulse" />
                    </svg>

                    {/* Annotations */}
                    <div className="absolute top-1 right-2 text-[10px] font-bold text-emerald-300 bg-emerald-950/90 px-1.5 py-0.5 rounded border border-emerald-500/40">
                      지속적 우상향
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {t.realQuantProof.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="break-keep">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Outcome */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                  {t.realQuantProof.resultLabel}
                </span>
                <span className="text-xs sm:text-sm text-emerald-200 font-semibold text-right break-keep">
                  {t.realQuantProof.resultText}
                </span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PART 3: Bottom Trust Callout Banner & Action */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-950/40 via-zinc-900 to-emerald-950/40 border border-white/10 p-6 sm:p-10 text-center shadow-2xl overflow-hidden"
        >
          {/* Subtle line background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-white font-bold leading-relaxed mb-6 break-keep">
              &ldquo;{t.bannerQuote}&rdquo;
            </p>

            {/* Key Value Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
              {t.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 text-gray-200 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* CTA button triggering Compound Calculator popup or Telegram */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenCalculator?.()}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold rounded-xl text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20 cursor-pointer"
                style={{ backgroundColor: '#10b981' }}
              >
                <Calculator size={18} />
                <span>{t.bannerCta}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
