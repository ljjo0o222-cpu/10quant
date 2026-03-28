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

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [view, setView] = useState<ViewMode>('user');
  const [themeColor, setThemeColor] = useState<string>('#2563eb'); // Default blue
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Update document title based on language
  useEffect(() => {
    document.title = lang === 'ko' ? '리얼퀀트 (RealQuant)' : 'RealQuant';
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-black font-sans selection:bg-blue-500/30">
      <Header
        lang={lang}
        setLang={setLang}
        view={view}
        setView={setView}
        themeColor={themeColor}
      />
      
      {view === 'user' ? (
        <UserView lang={lang} themeColor={themeColor} posts={posts} />
      ) : (
        <AdminView
          lang={lang}
          themeColor={themeColor}
          setThemeColor={setThemeColor}
          posts={posts}
          setPosts={setPosts}
        />
      )}

      {view === 'user' && <Footer lang={lang} themeColor={themeColor} />}
    </div>
  );
}

