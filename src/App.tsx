/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, ViewMode, Post, initialPosts } from './data/content';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UserView } from './components/UserView';
import { AdminView } from './components/AdminView';
import { AdminLogin } from './components/AdminLogin';
import { ChatSupport } from './components/ChatSupport';
import { CompoundCalculator } from './components/CompoundCalculator';

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [view, setView] = useState<ViewMode>('user');
  const [themeColor, setThemeColor] = useState<string>('#2563eb'); // Default blue
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);

  // Update document title and direction based on language
  useEffect(() => {
    document.title = lang === 'ko' ? '리얼퀀트 (RealQuant)' : 'RealQuant';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-black font-sans selection:bg-blue-500/30">
      <Header
        lang={lang}
        setLang={setLang}
        view={view}
        setView={setView}
        themeColor={themeColor}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />
      
      {view === 'user' ? (
        <UserView 
          lang={lang} 
          themeColor={themeColor} 
          posts={posts} 
          onOpenCalculator={() => setIsCalculatorOpen(true)}
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

