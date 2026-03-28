import React, { useState } from 'react';
import { Lock, User, AlertCircle } from 'lucide-react';
import { Language, translations } from '../data/content';

interface AdminLoginProps {
  lang: Language;
  themeColor: string;
  onLogin: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ lang, themeColor, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Admin credentials provided by user
    if (username === 'admin' && password === 'realquant') {
      onLogin();
      setError(false);
    } else {
      setError(true);
    }
  };

  const t = translations[lang].admin;

  return (
    <div className="flex-grow flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
            style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
          >
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {lang === 'ko' ? '관리자 로그인' : 'Admin Login'}
          </h2>
          <p className="text-gray-400 text-sm text-center">
            {lang === 'ko' 
              ? '대시보드에 접속하려면 아이디와 비밀번호를 입력하세요.' 
              : 'Enter your ID and password to access the dashboard.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
              {lang === 'ko' ? '아이디' : 'ID'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <User size={18} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all"
                style={{ '--tw-ring-color': themeColor } as any}
                placeholder={lang === 'ko' ? '아이디 입력' : 'Enter ID'}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">
              {lang === 'ko' ? '비밀번호' : 'Password'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-all"
                style={{ '--tw-ring-color': themeColor } as any}
                placeholder={lang === 'ko' ? '비밀번호 입력' : 'Enter Password'}
                required
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20 animate-shake">
              <AlertCircle size={18} />
              <span className="text-sm font-medium">
                {lang === 'ko' 
                  ? '아이디 또는 비밀번호가 올바르지 않습니다.' 
                  : 'Invalid ID or password.'}
              </span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 shadow-lg"
            style={{ backgroundColor: themeColor }}
          >
            {lang === 'ko' ? '로그인' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};
