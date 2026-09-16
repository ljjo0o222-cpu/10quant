import React, { useState } from 'react';
import { translations, Language, Post, faqSectionTranslations } from '../data/content';
import { BacktestChart } from './BacktestChart';
import { WhyRealQuant } from './WhyRealQuant';
import { ArrowRight, BarChart3, Shield, Zap, RefreshCw, GitBranch, Activity, TrendingUp, ShieldCheck, AlertTriangle, Clock, Ban, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface UserViewProps {
  lang: Language;
  themeColor: string;
  posts: Post[];
  onOpenCalculator?: () => void;
  isBannerVisible?: boolean;
}

export const UserView: React.FC<UserViewProps> = ({ 
  lang, 
  themeColor, 
  posts, 
  onOpenCalculator,
  isBannerVisible 
}) => {
  const t = translations[lang];
  const faqText = faqSectionTranslations[lang] || faqSectionTranslations.ko;
  const displayedPosts = posts.slice(0, 6);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // 첫 번째 FAQ 기본 오픈
  const faqs = t.chatSupport?.faqs || [];

  const featureIcons = [
    <GitBranch size={32} style={{ color: themeColor }} />,
    <TrendingUp size={32} style={{ color: themeColor }} />,
    <ShieldCheck size={32} style={{ color: themeColor }} />,
    <AlertTriangle size={32} style={{ color: themeColor }} />,
    <Clock size={32} style={{ color: themeColor }} />,
    <Shield size={32} style={{ color: themeColor }} />,
  ];

  return (
    <main className={`flex-1 bg-black text-white transition-all duration-300 ${isBannerVisible ? 'pt-[118px] sm:pt-[120px]' : 'pt-20'}`}>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30" style={{ backgroundColor: themeColor }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full mix-blend-screen filter blur-[120px] opacity-20" style={{ backgroundColor: '#4f46e5' }}></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto px-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.3] sm:leading-[1.22] mb-6 break-keep">
              {t.hero.title.includes('리얼퀀트') ? (
                <>
                  {t.hero.title.split('리얼퀀트')[0]}리얼<span style={{ color: themeColor }}>퀀트</span>{t.hero.title.split('리얼퀀트')[1]}
                </>
              ) : t.hero.title.includes('RealQuant') ? (
                <>
                  {t.hero.title.split('RealQuant')[0]}Real<span style={{ color: themeColor }}>Quant</span>{t.hero.title.split('RealQuant')[1]}
                </>
              ) : (
                t.hero.title
              )}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mx-auto mb-10 font-normal leading-relaxed break-keep max-w-3xl whitespace-normal md:whitespace-pre-line">
              {t.hero.subtitle}
            </p>
            <a
              href="https://t.me/realquant7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20"
              style={{ backgroundColor: themeColor, color: '#fff' }}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why RealQuant Section */}
      <WhyRealQuant 
        lang={lang} 
        themeColor={themeColor} 
        onOpenCalculator={onOpenCalculator} 
      />

      {/* Features Section */}
      <section id="strategies" className="py-20 sm:py-28 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 break-keep">{t.features.title}</h2>
            <div className="w-20 sm:w-24 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: themeColor }}></div>
            {(t.features as any).subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed break-keep mb-8 max-w-3xl mx-auto font-normal">
                {(t.features as any).subtitle}
              </p>
            )}

            {/* Safety Guardrails Banner */}
            {Array.isArray((t.features as any).safetyHighlights) && (t.features as any).safetyHighlights.length > 0 ? (
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 sm:p-2.5 bg-zinc-900/90 border border-white/10 rounded-2xl">
                {(t.features as any).safetyHighlights.map((hl: any, idx: number) => {
                  const isStopLoss = idx === 3;
                  return (
                    <span
                      key={idx}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-1.5 break-keep ${
                        isStopLoss
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-red-500/10 border-red-500/30 text-red-400'
                      }`}
                    >
                      {isStopLoss ? <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" /> : <Ban size={14} className="text-red-400 flex-shrink-0" />}
                      <span>{hl.label}</span>
                      {hl.desc && <span className="opacity-75 font-normal text-[10px] sm:text-xs">({hl.desc})</span>}
                    </span>
                  );
                })}
              </div>
            ) : (
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 sm:p-2.5 bg-zinc-900/90 border border-white/10 rounded-2xl">
                <span className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5 break-keep">
                  <Ban size={14} className="text-red-400 flex-shrink-0" />
                  No Martingale
                </span>
                <span className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5 break-keep">
                  <Ban size={14} className="text-red-400 flex-shrink-0" />
                  No Grid System
                </span>
                <span className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5 break-keep">
                  <Ban size={14} className="text-red-400 flex-shrink-0" />
                  No Lot Escalation
                </span>
                <span className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5 break-keep">
                  <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                  Fixed % Stop Loss
                </span>
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
            {t.features.items.map((item, index) => {
              const itemTag = (item as any).tag;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 sm:p-7 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-white/25 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {React.cloneElement(featureIcons[index] as React.ReactElement, { size: 22 })}
                      </div>
                      {itemTag && (
                        <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold px-2.5 py-0.5 rounded-full border border-white/10 bg-black/60 text-gray-300">
                          {itemTag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-white transition-colors break-keep">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-keep font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Operable Items Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 break-keep">{t.operableItems.title}</h3>
            <div className="w-16 h-0.5 mx-auto rounded-full" style={{ backgroundColor: themeColor }}></div>
          </motion.div>

          {/* Asset Cards Section */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
            {[
              { 
                label: t.operableItems.commodities, 
                title: 'XAUUSD', 
                sub: 'GOLD' 
              },
              { 
                label: t.operableItems.indices, 
                title: 'USTECH100', 
                sub: 'NASDAQ100' 
              },
              { 
                label: t.operableItems.indices, 
                title: 'US30', 
                sub: 'DOW JONES' 
              },
              { 
                label: t.operableItems.currencyPairs, 
                title: 'EURUSD', 
                sub: 'EUR / USD' 
              },
              { 
                label: t.operableItems.currencyPairs, 
                title: 'GBPUSD', 
                sub: 'GBP / USD' 
              },
              { 
                label: t.operableItems.currencyPairs, 
                title: 'AUDCAD', 
                sub: 'AUD / CAD' 
              }
            ].map((asset, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-4 sm:p-8 lg:p-10 rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden group hover:border-white/20 transition-all"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ 
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} />
                
                <div className="relative z-10">
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sm:mb-4 block">
                      {asset.label}
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-1 sm:mb-2 break-keep">
                      {asset.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-tight">
                      {asset.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-20 sm:py-28 md:py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 break-keep">{t.nav.performance}</h2>
            <div className="w-20 sm:w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BacktestChart themeColor={themeColor} lang={lang} />
          </motion.div>
        </div>
      </section>

      {/* Actual Returns Section */}
      <section id="actual-returns" className="py-20 sm:py-28 md:py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 break-keep">{t.actualReturns.title}</h2>
            <div className="w-20 sm:w-24 h-1 mx-auto rounded-full mb-6 sm:mb-8" style={{ backgroundColor: themeColor }}></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal mb-8 whitespace-pre-line break-keep max-w-2xl mx-auto leading-relaxed">{t.actualReturns.weeklyNotice}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 rounded-2xl p-4 sm:p-8 border border-zinc-800"
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-zinc-950 mb-6 sm:mb-8 border border-zinc-800/50">
                <img
                  src="/return.jpg"
                  alt="Actual Returns Chart"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="bg-zinc-950 p-4 sm:p-6 rounded-xl border border-zinc-800/50 text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">{t.actualReturns.totalGrowth}</div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold" style={{ color: themeColor }}>227.8%</div>
                </div>
                <div className="bg-zinc-950 p-4 sm:p-6 rounded-xl border border-zinc-800/50 text-center">
                  <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">{t.actualReturns.winRate || '승률'}</div>
                  <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-400">77.27%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section (Configured as 3 rows of 4 items = 12 partners) */}
      <section id="partners" className="py-20 sm:py-28 bg-black relative overflow-hidden border-t border-white/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Content Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 sm:mb-16 max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 break-keep">
                {t.partners.tag?.includes(' / ') ? t.partners.tag.split(' / ')[1] : (t.partners.tag || 'Partners')}
              </h2>
              <div className="w-20 sm:w-24 h-1 mx-auto rounded-full mb-6 sm:mb-8" style={{ backgroundColor: themeColor }}></div>
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white leading-snug mb-4 sm:mb-6 break-keep">
                {lang === 'ko' || lang === 'en' ? (
                  t.partners.title.split(' ').map((word, i) => (
                    <span key={i} className={i >= 2 && i <= 5 ? 'text-blue-500' : ''}>
                      {word}{' '}
                    </span>
                  ))
                ) : (
                  t.partners.title
                )}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed break-keep font-light">
                {t.partners.desc}
              </p>
            </motion.div>

            {/* Logos Grid: 4 rows of 3 items on mobile (grid-cols-3), 3 rows of 4 items on desktop (md:grid-cols-4) */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 max-w-5xl w-full">
              {[
                { name: 'AXI', domain: 'axi.com', logoUrl: 'https://www.axi.com/themes/custom/axi_theme/logo.svg' },
                { name: 'AVATRADE', domain: 'avatrade.com' },
                { name: 'FXCM', domain: 'fxcm.com' },
                { name: 'TMGM', domain: 'tmgm.com' },
                { name: 'EC Markets', domain: 'ecmarkets.com' },
                { name: 'IC MARKETS', domain: 'icmarkets.com' },
                { name: 'XM', domain: 'xm.com' },
                { name: 'VANTAGE', domain: 'vantagemarkets.com' },
                { name: 'VT MARKETS', domain: 'vtmarkets.com' },
                { name: 'FPMARKETS', domain: 'fpmarkets.com' },
                { name: 'HANTEC MARKETS', domain: 'hantecmarkets.com' },
                { name: 'PUPRIME', domain: 'puprime.com' },
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  className="flex flex-col items-center justify-center p-2 sm:p-4 bg-zinc-900/70 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/25 hover:bg-zinc-800/80 transition-all duration-300 group h-24 sm:h-32 shadow-md"
                >
                  <div className="h-10 sm:h-14 w-full flex items-center justify-center bg-white/[0.04] rounded-lg sm:rounded-xl p-1.5 sm:p-2 group-hover:bg-white/[0.08] transition-colors">
                    <img
                      src={(partner as any).logoUrl || `https://logo.clearbit.com/${partner.domain}?size=200`}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter grayscale brightness-200 contrast-125 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`;
                        (e.target as HTMLImageElement).className = "h-5 w-5 sm:h-8 sm:w-8 grayscale brightness-200 opacity-80 group-hover:opacity-100 transition-all duration-300";
                      }}
                    />
                  </div>
                  <span className="mt-1.5 sm:mt-2.5 text-[9px] sm:text-xs font-bold text-gray-400 group-hover:text-gray-200 tracking-tight sm:tracking-wider uppercase truncate max-w-full px-1">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section (GEO & SEO Optimization with 300+ chars answers) */}
      <section id="faq" className="py-20 sm:py-28 bg-zinc-950/80 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle size={14} />
              <span>{faqText.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 break-keep">{faqText.title}</h2>
            <div className="w-20 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: themeColor }}></div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light break-keep">
              {faqText.subtitle}
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden transition-all duration-200 hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 pr-3">
                      <span className="text-xs sm:text-sm md:text-base font-mono font-bold" style={{ color: themeColor }}>
                        0{index + 1}
                      </span>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug break-keep">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed border-t border-white/5 bg-black/20 font-light">
                      <p className="whitespace-pre-line break-keep font-light">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base break-keep">{faqText.moreTitle}</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 break-keep">
                {faqText.moreDesc}
              </p>
            </div>
            <a
              href="https://t.me/realquant77"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-white text-sm font-bold transition-all hover:scale-105 whitespace-nowrap shadow-md"
              style={{ backgroundColor: themeColor }}
            >
              {faqText.inquiryButton}
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
