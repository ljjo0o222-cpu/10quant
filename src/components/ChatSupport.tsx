import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Headphones, ChevronRight, HelpCircle, Calculator } from 'lucide-react';
import { Language, translations, calculatorTranslations } from '../data/content';

interface ChatSupportProps {
  lang: Language;
  themeColor: string;
  onOpenCalculator: () => void;
}

export const ChatSupport: React.FC<ChatSupportProps> = ({ lang, themeColor, onOpenCalculator }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const t = translations[lang].chatSupport;
  const calcT = calculatorTranslations[lang] || calculatorTranslations.ko;

  const telegramLink = 'https://t.me/realquant77';

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-28 sm:bottom-36 right-0 w-[calc(100vw-32px)] sm:w-[380px] bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
              <div className="flex items-center space-x-2">
                <HelpCircle size={18} className="sm:w-5 sm:h-5" style={{ color: themeColor }} />
                <h3 className="text-white font-bold text-base sm:text-lg">{t.title}</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Quick Link to Compound Calculator Popup above FAQ */}
            <div className="px-3 sm:px-4 pt-3 pb-1 bg-zinc-900/30">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 text-emerald-300 transition-all text-xs font-semibold group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Calculator size={14} />
                  </div>
                  <span>{calcT.openPopup}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 font-mono">MDD</span>
                  <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </div>

            {/* FAQ List */}
            <div className="flex-1 overflow-y-auto max-h-[220px] sm:max-h-[280px] p-3 sm:p-4 space-y-1 sm:space-y-2 custom-scrollbar">
              <div className="flex justify-between items-center px-2 mb-2 sm:mb-4">
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider">{t.faqList}</span>
              </div>
              
              {t.faqs.map((faq, index) => (
                <div key={index} className="group">
                  <button 
                    onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                    className="w-full flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="text-xs sm:text-sm font-bold mt-0.5" style={{ color: themeColor }}>{index + 1}</span>
                    <span className="flex-1 text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <ChevronRight 
                      size={14} 
                      className={`text-gray-600 transition-transform duration-300 mt-0.5 sm:w-4 sm:h-4 ${selectedFaq === index ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {selectedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 sm:px-10 pb-3 sm:pb-4 pt-1 text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Chat Service Section */}
            <div className="p-4 sm:p-6 bg-zinc-900/80 border-t border-white/5">
              <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-blue-500 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base text-white font-bold mb-1">{t.chatTitle}</h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed mb-3 sm:mb-4">
                    {t.chatDesc}
                  </p>
                  <a 
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2 sm:py-2.5 px-4 rounded-full text-white font-bold text-xs sm:text-sm transition-all duration-300 group"
                    style={{ backgroundColor: themeColor }}
                  >
                    {t.chatButton}
                    <ChevronRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons: Compound Calculator (ABOVE) & 1:1 Chat (BELOW) */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-3">
        {/* Compound Calculator Floating Button (Directly ABOVE 1:1 Chat) */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={onOpenCalculator}
          aria-label={calcT.title}
          className="relative flex flex-col items-center justify-center w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-900/95 border border-emerald-500/40 shadow-2xl group transition-all duration-300 hover:border-emerald-400 hover:shadow-emerald-500/25 backdrop-blur-md cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <Calculator 
              className="w-5 h-5 sm:w-[26px] sm:h-[26px] text-emerald-400 group-hover:text-emerald-300 transition-all duration-300 group-hover:scale-110" 
            />
            <span className="absolute -top-1 -right-1 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          {/* Text is hidden on mobile, visible on desktop */}
          <span className="hidden sm:inline-block text-[10px] font-bold mt-1 text-emerald-400 group-hover:text-emerald-300 transition-colors">
            {calcT.floatingButton}
          </span>

          {/* Hover Tooltip on Desktop */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex items-center pointer-events-none z-50">
            <div className="bg-zinc-900 border border-emerald-500/30 px-3 py-1.5 rounded-xl shadow-2xl whitespace-nowrap text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
              <span>{calcT.title}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                MDD
              </span>
            </div>
            <div className="w-2 h-2 bg-zinc-900 border-r border-b border-emerald-500/30 transform -rotate-45 -ml-1"></div>
          </div>
        </motion.button>

        {/* 1:1 Chat Floating Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t.title}
          className="flex flex-col items-center justify-center w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-zinc-900/95 border border-white/10 shadow-2xl group transition-all duration-300 hover:border-white/20 backdrop-blur-md cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <Headphones 
              className="w-5 h-5 sm:w-[26px] sm:h-[26px] transition-colors duration-300"
              style={{ color: isOpen ? '#fff' : themeColor }}
            />
            {isOpen && (
              <motion.div 
                layoutId="active-dot"
                className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-zinc-900"
                style={{ backgroundColor: themeColor }}
              />
            )}
          </div>
          {/* Text is hidden on mobile, visible on desktop */}
          <span className="hidden sm:inline-block text-[10px] font-bold mt-1 text-gray-400 group-hover:text-gray-200 transition-colors">
            {t.floatingButton}
          </span>
        </motion.button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
  );
};
