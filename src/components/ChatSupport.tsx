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

  const faqs = [
    { id: 1, question: '백테스팅과 실제 수익률은 진짜인가요?', answer: '백테스팅과 실제 수익률은 100% 사실이며, 거래 플랫폼에서 제공하는 화면이기 때문에 조작할 수 없습니다.' },
    { id: 2, question: 'RealQuant는 무료인가요?', answer: '부분적 유료입니다. 고객이 RealQuant를 이용하여 수익이 발생했을때 수익의 일정 %를 운용보수로 수취하고 있습니다. 손실일 경우에는 운용보수를 수취하지 않습니다.' },
    { id: 3, question: '최소 투자 금액은 얼마인가요?', answer: '포지션의 최소 계약 수량이 있기 때문에 500USDT(테더)부터 가능합니다.' },
    { id: 4, question: '내 투자금은 안전한가요?', answer: 'RealQuant는 고객의 자금을 직접 수취하지 않습니다. 고객님의 거래소 계좌와 RealQuant가 연결되는 시스템이며 포지션의 매수, 매도 결정에 대한 권한만 있을 뿐, 자금 입출금에 대한 권한은 없으므로 고객님의 자산은 안전합니다.' },
    { id: 5, question: '어떤 전략으로 수익을 달성하나요?', answer: 'RealQuant는 고도화된 알고리즘(순환매 시스템, 변동성 동적 적응, 추세+역추세 혼합 작동, 적응형 회복 논리)를 결합하여 탄생한 퀀트 프로그램입니다. AUDCAD(호주달러/캐나다달러 통화쌍)과 XAUUSD(금)을 거래하여 수익을 창출합니다.' },
    { id: 6, question: '전략 세팅방법이 어떻게 되나요?', answer: '전략의 설정에는 고객의 개인의사가 필요 없으며, 별도의 세팅이 필요하지 않습니다.(24시간 365일 100% 자동화) 커뮤니티에 입장하시면 가이드가 준비되어 있습니다. 가이드를 참고해주시기 바랍니다.' },
    { id: 7, question: '수익은 어떻게 출금하나요?', answer: '커뮤니티에 입장하시면 가이드가 준비되어 있습니다. 가이드를 참고해주시기 바랍니다.' },
  ];

  const telegramLink = 'https://t.me/realquant_support'; // Placeholder link

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[360px] bg-zinc-950 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
              <div className="flex items-center space-x-2">
                <HelpCircle size={20} style={{ color: themeColor }} />
                <h3 className="text-white font-bold text-lg">자주 묻는 질문</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* FAQ List */}
            <div className="flex-1 overflow-y-auto max-h-[320px] p-4 space-y-2 custom-scrollbar">
              <div className="flex justify-between items-center px-2 mb-4">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">FAQ List</span>
              </div>
              
              {faqs.map((faq) => (
                <div key={faq.id} className="group">
                  <button 
                    onClick={() => setSelectedFaq(selectedFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="text-sm font-bold mt-0.5" style={{ color: themeColor }}>{faq.id}</span>
                    <span className="flex-1 text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <ChevronRight 
                      size={16} 
                      className={`text-gray-600 transition-transform duration-300 mt-0.5 ${selectedFaq === faq.id ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {selectedFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-10 pb-4 pt-1 text-xs text-gray-500 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Chat Service Section */}
            <div className="p-6 bg-zinc-900/80 border-t border-white/5">
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-black/40 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold mb-1">1:1 채팅 서비스</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                    답을 찾을 수 없으신가요? 지원팀과 대화를 시작하세요.
                  </p>
                  <a 
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-full text-white font-bold text-sm transition-all duration-300 group"
                    style={{ backgroundColor: themeColor }}
                  >
                    채팅 시작
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
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
          1:1 채팅
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
