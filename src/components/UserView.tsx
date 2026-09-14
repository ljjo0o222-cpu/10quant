import React, { useState } from 'react';
import { translations, Language, Post } from '../data/content';
import { BacktestChart } from './BacktestChart';
import { ArrowRight, BarChart3, Shield, Zap, RefreshCw, GitBranch, Activity, TrendingUp, ShieldCheck, AlertTriangle, Clock, Ban, CheckCircle2, ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface UserViewProps {
  lang: Language;
  themeColor: string;
  posts: Post[];
}

export const UserView: React.FC<UserViewProps> = ({ lang, themeColor, posts }) => {
  const t = translations[lang];
  const displayedPosts = posts.slice(0, 6);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // 첫 번째 FAQ 기본 오픈

  const detailedFaqs = [
    {
      q: '백테스팅 데이터와 실제 수익률은 검증되었나요?',
      a: '리얼퀀트의 백테스팅 및 실계좌 거래 수익률 데이터는 100% 검증된 수치입니다. 공인된 글로벌 거래 플랫폼(MT4/MT5)과 외환 규제기관의 표준 거래 환경에서 기록된 데이터로서 임의로 조작할 수 없습니다. 6년 이상의 정밀 틱 데이터 백테스트와 실제 계좌 운용을 통해 4.18의 프로핏 팩터와 13.23%의 최대 낙폭(MDD) 제어를 완벽히 입증했습니다. 투명한 검증을 위해 커뮤니티에서 실시간 계좌 내역을 상시 공개하고 있습니다.'
    },
    {
      q: '최소 투자 금액은 얼마부터 시작할 수 있나요?',
      a: '리얼퀀트 솔루션은 계약 단위별 정밀한 리스크 관리와 포지션 분할 매매를 위해 최소 $1,000부터 운용이 가능합니다. 자본 규모에 맞추어 사전에 정의된 리스크 비율에 따라 계약 수가 최적으로 자동 계산되므로 안정적인 복리 운용을 지원합니다. 무리한 고레버리지를 지양하고 철저한 자금 관리 원칙을 준수합니다.'
    },
    {
      q: '투자 원금과 예치 자산은 어떻게 안전하게 보호되나요?',
      a: '리얼퀀트는 고객의 투자금을 절대 직접 수취하거나 관리하지 않습니다. 고객 본인 명의의 글로벌 정식 규제 외환·CFD 거래소 계정에 자금을 예치하고, 리얼퀀트는 API 연동 또는 공인 카피트레이딩 시스템을 통해 오직 주문 진입과 청산 권한만을 가집니다. 입출금에 대한 모든 통제권은 전적으로 고객에게 귀속되어 있으므로 자금 유용이나 사기 리스크로부터 100% 안전합니다.'
    },
    {
      q: '어떤 퀀트 알고리즘 전략과 원리로 수익을 창출하나요?',
      a: '리얼퀀트는 독립적으로 작동하는 다중 브레이크아웃(Breakout) 전략을 상호 유기적으로 결합하여 시장의 변동성 확대 및 추세 돌파 구간을 정밀하게 포착합니다. 특히 계좌 파산의 주원인이 되는 마틴게일(Martingale, 손실 시 2배 베팅)과 그리드(Grid, 물타기 분할 매수) 방식을 절대 사용하지 않습니다. 모든 포지션에 100% 필수 손절(Stop Loss)을 적용하며, 미국 CPI·FOMC 등 고위험 경제지표 발표 시점 자동 거래 회피 및 주말 갭 리스크 방지 기술이 탑재되어 있어 어떠한 급변 장세에서도 시드가 안전하게 보호됩니다.'
    },
    {
      q: '초보자도 쉽게 이용할 수 있나요? 별도의 프로그램 설치가 필요한가요?',
      a: '초보자도 즉시 참여하실 수 있습니다. 복잡한 지표 설정이나 개인 PC에 프로그램을 24시간 켜둘 필요가 없으며, 전용 클라우드 서버와 거래소 연동을 통해 24시간 100% 전자동으로 작동합니다. 공식 텔레그램 커뮤니티 입장 시 계좌 개설부터 연동까지 단계별 상세 가이드와 1:1 전담 매니저 지원을 제공해 드립니다.'
    },
    {
      q: '수익금 및 원금 출금은 언제든지 가능한가요?',
      a: '네, 언제든지 전액 출금이 가능합니다. 고객 본인 명의의 거래소 계좌이므로 의무 락업(Lock-up) 기간이나 수수료 페널티가 전혀 없으며, 본인이 원하실 때 실시간으로 원하는 금액만큼 본인의 은행 계좌나 가상자산 지갑으로 자유롭게 출금하실 수 있습니다.'
    }
  ];

  const featureIcons = [
    <GitBranch size={32} style={{ color: themeColor }} />,
    <TrendingUp size={32} style={{ color: themeColor }} />,
    <ShieldCheck size={32} style={{ color: themeColor }} />,
    <AlertTriangle size={32} style={{ color: themeColor }} />,
    <Clock size={32} style={{ color: themeColor }} />,
    <Shield size={32} style={{ color: themeColor }} />,
  ];

  return (
    <main className="flex-1 bg-black text-white pt-20">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-30" style={{ backgroundColor: themeColor }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] opacity-20" style={{ backgroundColor: '#4f46e5' }}></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full px-2"
          >
            <h1 className="text-[5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight mb-8 whitespace-nowrap">
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
            <p className="text-[3.5vw] sm:text-sm md:text-lg lg:text-xl text-gray-400 mx-auto mb-12 font-light leading-relaxed whitespace-normal">
              {lang === 'ko' ? (
                <>
                  RealQuant는 고도화된 알고리즘과<br className="block sm:hidden" />
                  빅데이터 분석을 통해 감정을 배제하고,<br className="block sm:hidden" />
                  수익에만 집중하여 안정적인 수익을 추구합니다.
                </>
              ) : lang === 'en' ? (
                <>
                  RealQuant pursues stable returns by<br className="block sm:hidden" />
                  eliminating emotions and focusing solely on profit<br className="block sm:hidden" />
                  through advanced algorithms and big data analysis.
                </>
              ) : lang === 'zh' ? (
                <>
                  RealQuant 通过先进的算法和大数据分析，<br className="block sm:hidden" />
                  排除情感干扰，专注于盈利，<br className="block sm:hidden" />
                  追求稳定的收益。
                </>
              ) : lang === 'ja' ? (
                <>
                  RealQuantは、高度なアルゴリズムと<br className="block sm:hidden" />
                  ビッグデータ分析を通じて感情を排除し、<br className="block sm:hidden" />
                  利益のみに集中することで、安定した収益を追求します。
                </>
              ) : t.hero.subtitle}
            </p>
            <a
              href="https://t.me/realquant7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: themeColor, color: '#fff' }}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="strategies" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.features.title}</h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: themeColor }}></div>
            {(t.features as any).subtitle && (
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed break-keep mb-8">
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
                      className={`px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-1.5 ${
                        isStopLoss
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-red-500/10 border-red-500/30 text-red-400'
                      }`}
                    >
                      {isStopLoss ? <CheckCircle2 size={14} className="text-emerald-400" /> : <Ban size={14} className="text-red-400" />}
                      <span>{hl.label}</span>
                      {hl.desc && <span className="opacity-75 font-normal text-[11px] sm:text-xs">({hl.desc})</span>}
                    </span>
                  );
                })}
              </div>
            ) : (
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 sm:p-2.5 bg-zinc-900/90 border border-white/10 rounded-2xl">
                <span className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                  <Ban size={14} className="text-red-400" />
                  No Martingale
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                  <Ban size={14} className="text-red-400" />
                  No Grid System
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                  <Ban size={14} className="text-red-400" />
                  No Lot Escalation
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Fixed % Stop Loss
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {t.features.items.map((item, index) => {
              const itemTag = (item as any).tag;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900/80 border border-white/10 hover:border-white/25 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {React.cloneElement(featureIcons[index] as React.ReactElement, { size: 24 })}
                      </div>
                      {itemTag && (
                        <span className="text-[11px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded-full border border-white/10 bg-black/60 text-gray-300">
                          {itemTag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed break-keep">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Operable Items Title */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.operableItems.title}</h3>
            <div className="w-16 h-0.5 mx-auto rounded-full" style={{ backgroundColor: themeColor }}></div>
          </div>

          {/* Asset Cards Section */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative p-6 sm:p-10 rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden group hover:border-white/20 transition-all"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ 
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} />
                
                <div className="relative z-10">
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 sm:mb-8 block">
                      {asset.label}
                    </span>
                    <h3 className="text-2xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-2 sm:mb-4">
                      {asset.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm md:text-base text-gray-400 font-medium tracking-tight whitespace-nowrap">
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
      <section id="performance" className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.nav.performance}</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
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
      <section id="actual-returns" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.actualReturns.title}</h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: themeColor }}></div>
            <p className="text-[3.2vw] sm:text-lg text-gray-400 font-light mb-8 whitespace-pre-line">{t.actualReturns.weeklyNotice}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 rounded-2xl p-4 sm:p-8 border border-zinc-800"
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-zinc-950 mb-8 border border-zinc-800/50">
                <img
                  src="/return.jpg"
                  alt="Actual Returns Chart"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/50 text-center">
                  <div className="text-sm sm:text-base text-gray-400 mb-2">{t.actualReturns.totalGrowth}</div>
                  <div className="text-2xl sm:text-5xl font-bold" style={{ color: themeColor }}>227.8%</div>
                </div>
                <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800/50 text-center">
                  <div className="text-sm sm:text-base text-gray-400 mb-2">{t.actualReturns.winRate || '승률'}</div>
                  <div className="text-2xl sm:text-5xl font-bold text-blue-400">77.27%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section (Moved to bottom) */}
      <section id="partners" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.partners.tag.split(' / ')[1]}</h2>
              <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: themeColor }}></div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-8 lg:whitespace-nowrap">
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
              <p className="text-sm sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {t.partners.desc}
              </p>
            </motion.div>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full">
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all group h-32"
                >
                  <div className="h-16 w-full flex items-center justify-center bg-white/10 rounded-lg p-3 group-hover:bg-white/20 transition-colors">
                    <img
                      src={(partner as any).logoUrl || `https://logo.clearbit.com/${partner.domain}?size=200`}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter grayscale brightness-200 contrast-125 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`;
                        (e.target as HTMLImageElement).className = "h-8 w-8 grayscale brightness-200 opacity-80 group-hover:opacity-100 transition-all duration-300";
                      }}
                    />
                  </div>
                  <span className="mt-3 text-[11px] font-bold text-gray-400 tracking-widest uppercase">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section (GEO & SEO Optimization with 300+ chars answers) */}
      <section id="faq" className="py-24 bg-zinc-950/80 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle size={14} />
              <span>FAQ & Answers</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">자주 묻는 질문</h2>
            <div className="w-20 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: themeColor }}></div>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light">
              리얼퀀트(RealQuant) 퀀트 투자 솔루션과 알고리즘 트레이딩에 대해 가장 많이 묻는 핵심 질문에 투명하게 답해 드립니다.
            </p>
          </motion.div>

          <div className="space-y-4">
            {detailedFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden transition-all duration-200 hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                  >
                    <div className="flex items-center space-x-4 pr-4">
                      <span className="text-sm md:text-base font-mono font-bold" style={{ color: themeColor }}>
                        0{index + 1}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm md:text-base text-gray-300 leading-relaxed border-t border-white/5 bg-black/20">
                      <p className="whitespace-pre-line break-keep font-light">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-base">더 궁금하신 사항이 있으신가요?</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                24시간 운영되는 리얼퀀트 공식 텔레그램 커뮤니티와 1:1 상담 채널에서 즉시 답변해 드립니다.
              </p>
            </div>
            <a
              href="https://t.me/realquant77"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white text-sm font-bold transition-all hover:scale-105 whitespace-nowrap"
              style={{ backgroundColor: themeColor }}
            >
              1:1 실시간 문의하기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
