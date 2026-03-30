import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Headphones, ChevronRight, HelpCircle, ExternalLink } from 'lucide-react';
import { Language, translations } from '../data/content';

interface ChatSupportProps {
  lang: Language;
  themeColor: string;
}

export const ChatSupport: React.FC<ChatSupportProps> = ({ lang, themeColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const t = translations[lang].chatSupport;

  const telegramLink = 'https://t.me/realquant77';

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-48px)] sm:w-[360px] bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
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

            {/* FAQ List */}
            <div className="flex-1 overflow-y-auto max-h-[250px] sm:max-h-[320px] p-3 sm:p-4 space-y-1 sm:space-y-2 custom-scrollbar">
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

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl group transition-all duration-300 hover:border-white/20"
      >
        <div className="relative">
          <Headphones 
            size={28} 
            className="transition-colors duration-300"
            style={{ color: isOpen ? '#fff' : themeColor }}
          />
          {isOpen && (
            <motion.div 
              layoutId="active-dot"
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-zinc-900"
              style={{ backgroundColor: themeColor }}
            />
          )}
        </div>
        <span className="text-[10px] font-bold mt-1 text-gray-500 group-hover:text-gray-300 transition-colors">
          {t.floatingButton}
        </span>
      </motion.button>

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
