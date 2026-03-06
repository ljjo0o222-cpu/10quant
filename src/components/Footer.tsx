import React from 'react';
import { translations, Language } from '../data/content';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
  lang: Language;
  themeColor: string;
}

export const Footer: React.FC<FooterProps> = ({ lang, themeColor }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  return (
    <footer className="bg-black border-t border-white/10 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tighter text-white mb-4 block">
              10<span style={{ color: themeColor }}>quant</span>
            </span>
            <p className="text-gray-400 max-w-sm">
              {t.desc}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{navT.home}</a></li>
              <li><a href="#strategies" className="text-gray-400 hover:text-white transition-colors">{navT.strategies}</a></li>
              <li><a href="#quant-strategies" className="text-gray-400 hover:text-white transition-colors">{navT.quantStrategies}</a></li>
              <li><a href="#performance" className="text-gray-400 hover:text-white transition-colors">{navT.performance}</a></li>
              <li><a href="#actual-returns" className="text-gray-400 hover:text-white transition-colors">{navT.actualReturns}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{navT.contact}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">{t.rights}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
