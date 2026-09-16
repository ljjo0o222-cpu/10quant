/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, ViewMode, Post, initialPosts } from './data/content';
import { 
  getInitialLanguage, 
  detectLanguageFromGeoIP, 
  saveUserLanguagePreference 
} from './utils/geoLanguage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UserView } from './components/UserView';
import { AdminView } from './components/AdminView';
import { AdminLogin } from './components/AdminLogin';
import { ChatSupport } from './components/ChatSupport';
import { CompoundCalculator } from './components/CompoundCalculator';
import { FloatingTelegramInquiry } from './components/FloatingTelegramInquiry';

export default function App() {
  // Automatically detects initial language from access region / browser / timezone. Defaults to 'en' if not matched.
  const [lang, setLang] = useState<Language>(() => getInitialLanguage());
  const [view, setView] = useState<ViewMode>('user');
  const [themeColor, setThemeColor] = useState<string>('#2563eb'); // Default blue
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);

  // Top event banner visibility with localStorage 24h suppression support
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined') {
        const hideUntil = localStorage.getItem('realquant_event_banner_hide_until');
        if (hideUntil && Date.now() < Number(hideUntil)) {
          return false;
        }
      }
    } catch {
      // ignore
    }
    return true;
  });

  const handleCloseBanner = (hideForToday: boolean = false) => {
    setIsBannerVisible(false);
    try {
      const expireTime = hideForToday 
        ? Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        : Date.now() + 12 * 60 * 60 * 1000; // 12 hours
      localStorage.setItem('realquant_event_banner_hide_until', expireTime.toString());
    } catch {
      // ignore
    }
  };

  // Background IP-based geolocation check if user hasn't explicitly saved a choice
  useEffect(() => {
    let isMounted = true;
    try {
      const hasManualPreference = typeof window !== 'undefined' && 
        !!localStorage.getItem('realquant_user_lang');

      if (!hasManualPreference) {
        detectLanguageFromGeoIP().then((geoLang) => {
          if (isMounted && geoLang) {
            setLang(geoLang);
          }
        });
      }
    } catch {
      // Ignore
    }
    return () => {
      isMounted = false;
    };
  }, []);

  // Update document title and direction based on language
  useEffect(() => {
    document.title = lang === 'ko' ? '리얼퀀트 (RealQuant)' : 'RealQuant';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    saveUserLanguagePreference(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black font-sans selection:bg-blue-500/30">
      <Header
        lang={lang}
        setLang={handleLanguageChange}
        view={view}
        setView={setView}
        themeColor={themeColor}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        isBannerVisible={isBannerVisible}
        onCloseBanner={handleCloseBanner}
      />
      
      {view === 'user' ? (
        <UserView 
          lang={lang} 
          themeColor={themeColor} 
          posts={posts} 
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          isBannerVisible={isBannerVisible}
        />
      ) : !isAuthenticated ? (
        <AdminLogin 
          lang={lang} 
          themeColor={themeColor} 
          onLogin={() => setIsAuthenticated(true)} 
        />
      ) : (
        <AdminView
          lang={lang}
          themeColor={themeColor}
          setThemeColor={setThemeColor}
          posts={posts}
          setPosts={setPosts}
          onLogout={() => setIsAuthenticated(false)}
        />
      )}

      {view === 'user' && (
        <>
          <Footer 
            lang={lang} 
            themeColor={themeColor} 
            view={view}
            setView={setView}
          />
          <ChatSupport 
            lang={lang} 
            themeColor={themeColor} 
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
          <FloatingTelegramInquiry 
            lang={lang} 
            themeColor={themeColor} 
          />
        </>
      )}

      {/* Monthly Compound Calculator Modal Popup */}
      <CompoundCalculator
        lang={lang}
        themeColor={themeColor}
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
}

