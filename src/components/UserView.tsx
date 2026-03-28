import React, { useState } from 'react';
import { translations, Language, Post } from '../data/content';
import { BacktestChart } from './BacktestChart';
import { ArrowRight, BarChart3, Shield, Zap, RefreshCw, GitBranch, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface UserViewProps {
  lang: Language;
  themeColor: string;
  posts: Post[];
}

export const UserView: React.FC<UserViewProps> = ({ lang, themeColor, posts }) => {
  const t = translations[lang];
  const [showAllPosts, setShowAllPosts] = useState(false);

  const displayedPosts = showAllPosts ? posts : posts.slice(0, 3);

  const featureIcons = [
    <BarChart3 size={32} style={{ color: themeColor }} />,
    <Shield size={32} style={{ color: themeColor }} />,
    <RefreshCw size={32} style={{ color: themeColor }} />,
    <GitBranch size={32} style={{ color: themeColor }} />,
    <Activity size={32} style={{ color: themeColor }} />,
    <Zap size={32} style={{ color: themeColor }} />,
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
            <h1 className="text-[5.5vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight mb-8 whitespace-nowrap">
              {t.hero.title.includes('리얼퀀트') ? (
                <>
                  {t.hero.title.split('리얼퀀트')[0]}리얼<span style={{ color: themeColor }}>퀀트</span>
                </>
              ) : t.hero.title.includes('RealQuant') ? (
                <>
                  {t.hero.title.split('RealQuant')[0]}Real<span style={{ color: themeColor }}>Quant</span>
                </>
              ) : (
                t.hero.title
              )}
            </h1>
            <p className="text-[2.8vw] sm:text-sm md:text-lg lg:text-xl text-gray-400 mx-auto mb-12 font-light leading-relaxed whitespace-nowrap">
              {t.hero.subtitle}
            </p>
            <button
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: themeColor, color: '#fff' }}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="strategies" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.features.title}</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: themeColor }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {t.features.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {featureIcons[index]}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Operable Items Title */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">운용가능 종목</h3>
            <div className="w-16 h-0.5 mx-auto rounded-full" style={{ backgroundColor: themeColor }}></div>
          </div>

          {/* Asset Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                label: '원자재', 
                title: 'XAUUSD', 
                sub: 'GOLD' 
              },
              { 
                label: '통화쌍', 
                title: 'AUDCAD', 
                sub: 'Australian Dollar / Canadian Dollar' 
              }
            ].map((asset, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative p-10 rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden group hover:border-white/20 transition-all"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ 
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }} />
                
                <div className="relative z-10">
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 block">
                      {asset.label}
                    </span>
                    <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                      {asset.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 font-medium tracking-tight whitespace-nowrap">
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
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.performance.title}</h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: themeColor }}></div>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12">{t.performance.desc}</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: themeColor }}></div>
                <span className="text-sm text-gray-300">RealQuant Strategy</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#10b981] mr-2"></div>
                <span className="text-sm text-gray-300">KOSPI</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fdba74] mr-2"></div>
                <span className="text-sm text-gray-300">NASDAQ</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
            {posts.length > 3 && (
              <button 
                onClick={() => setShowAllPosts(!showAllPosts)}
                className="text-gray-400 hover:text-white transition-colors flex items-center justify-center mx-auto group"
              >
                {showAllPosts ? t.actualReturns.viewLess : t.actualReturns.viewAll}
                <ArrowRight className={`ml-2 transition-transform ${showAllPosts ? '-rotate-90' : 'group-hover:translate-x-1'}`} size={16} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span style={{ color: themeColor }} className="font-medium mr-4">RealQuant</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white text-gray-100 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>
              </motion.div>
            ))}
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
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">파트너</h2>
              <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: themeColor }}></div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-8 lg:whitespace-nowrap">
                {t.partners.title.split(' ').map((word, i) => (
                  <span key={i} className={i >= 2 && i <= 5 ? 'text-blue-500' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
    </main>
  );
};
