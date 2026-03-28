import React from 'react';
import { translations, Language, Post } from '../data/content';
import { BacktestChart } from './BacktestChart';
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface UserViewProps {
  lang: Language;
  themeColor: string;
  posts: Post[];
}

export const UserView: React.FC<UserViewProps> = ({ lang, themeColor, posts }) => {
  const t = translations[lang];

  const featureIcons = [
    <BarChart3 size={32} style={{ color: themeColor }} />,
    <Shield size={32} style={{ color: themeColor }} />,
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
              {t.hero.title}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
        </div>
      </section>

      {/* RealQuant Strategies Section */}
      <section id="quant-strategies" className="py-32 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.quantStrategies.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.quantStrategies.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-colors group"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors" style={{ color: themeColor }}>{item.name}</h3>
                <p className="text-gray-400 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.performance.title}</h2>
              <p className="text-xl text-gray-400 font-light">{t.performance.desc}</p>
            </div>
            <div className="flex items-center space-x-6">
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
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t.actualReturns.title}</h2>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center group">
              {t.actualReturns.readMore}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
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
                  <span style={{ color: themeColor }} className="font-medium mr-4">Return</span>
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.contact.title}</h2>
          <p className="text-xl text-gray-400 font-light mb-12">{t.contact.desc}</p>
          <a
            href="https://t.me/realquant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 bg-[#229ED9] text-white hover:bg-[#1c88ba]"
          >
            <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.896-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.662 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            {t.contact.telegram}
          </a>
        </div>
      </section>
    </main>
  );
};
