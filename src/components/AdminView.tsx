import React, { useState } from 'react';
import { translations, Language, Post } from '../data/content';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, LogOut } from 'lucide-react';

interface AdminViewProps {
  lang: Language;
  themeColor: string;
  setThemeColor: (color: string) => void;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  onLogout: () => void;
}

export const AdminView: React.FC<AdminViewProps> = ({ lang, themeColor, setThemeColor, posts, setPosts, onLogout }) => {
  const t = translations[lang].admin;
  const [activeTab, setActiveTab] = useState<'posts' | 'settings'>('posts');
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const colors = ['#2563eb', '#4f46e5', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0ea5e9'];

  const handleSavePost = (post: Post) => {
    if (isAdding) {
      setPosts([{ ...post, id: Date.now().toString() }, ...posts]);
      setIsAdding(false);
    } else {
      setPosts(posts.map(p => p.id === post.id ? post : p));
      setEditingPost(null);
    }
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const PostForm = ({ post, onSave, onCancel }: { post: Partial<Post>, onSave: (p: Post) => void, onCancel: () => void }) => {
    const [formData, setFormData] = useState<Partial<Post>>(post);

    return (
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-white mb-6">
          {isAdding ? t.posts.add : t.posts.edit}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">{t.posts.titleLabel}</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">{t.posts.contentLabel}</label>
            <textarea
              value={formData.content || ''}
              onChange={e => setFormData({ ...formData, content: e.target.value })}
              rows={4}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">{t.posts.imageLabel}</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={formData.imageUrl || ''}
                onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
                className="flex-1 bg-black border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="https://..."
              />
              <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white transition-colors flex items-center">
                <ImageIcon size={20} />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Date</label>
            <input
              type="date"
              value={formData.date || new Date().toISOString().split('T')[0]}
              onChange={e => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex items-center"
          >
            <X size={16} className="mr-2" />
            {t.posts.cancel}
          </button>
          <button
            onClick={() => onSave(formData as Post)}
            className="px-6 py-2 rounded-lg text-white transition-colors flex items-center"
            style={{ backgroundColor: themeColor }}
          >
            <Save size={16} className="mr-2" />
            {t.posts.save}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-4xl font-bold text-white tracking-tight">{t.title}</h1>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 transition-all font-medium text-sm"
            >
              <LogOut size={16} />
              <span>{lang === 'ko' ? '로그아웃' : 'Logout'}</span>
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-1 bg-zinc-900 p-1 rounded-xl w-fit border border-white/5">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'posts' ? 'bg-black text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.tabs.posts}
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'settings' ? 'bg-black text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.tabs.settings}
            </button>
          </div>
        </div>

        {activeTab === 'posts' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-white">Posts</h2>
              {!isAdding && !editingPost && (
                <button
                  onClick={() => setIsAdding(true)}
                  className="flex items-center px-4 py-2 rounded-lg text-white transition-colors"
                  style={{ backgroundColor: themeColor }}
                >
                  <Plus size={18} className="mr-2" />
                  {t.posts.add}
                </button>
              )}
            </div>

            {isAdding && (
              <PostForm
                post={{ date: new Date().toISOString().split('T')[0] }}
                onSave={handleSavePost}
                onCancel={() => setIsAdding(false)}
              />
            )}

            {editingPost && (
              <PostForm
                post={editingPost}
                onSave={handleSavePost}
                onCancel={() => setEditingPost(null)}
              />
            )}

            {!isAdding && !editingPost && (
              <div className="space-y-4">
                {posts.map(post => (
                  <div key={post.id} className="bg-zinc-900 border border-white/5 hover:border-white/10 rounded-2xl p-6 flex items-center justify-between transition-colors group">
                    <div className="flex items-center space-x-6 flex-1">
                      <img src={post.imageUrl} alt={post.title} className="w-24 h-16 object-cover rounded-lg" referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">{post.title}</h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setEditingPost(post)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-8">{t.tabs.settings}</h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-4">{t.settings.themeColor}</label>
                <div className="flex flex-wrap gap-4">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setThemeColor(color)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                        themeColor === color ? 'ring-2 ring-white ring-offset-4 ring-offset-zinc-900' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="text-sm text-gray-500">Custom:</span>
                    <input
                      type="color"
                      value={themeColor}
                      onChange={(e) => setThemeColor(e.target.value)}
                      className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <label className="block text-sm font-medium text-gray-400 mb-4">{t.settings.fontFamily}</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="p-4 rounded-xl border border-white/20 bg-black text-white text-left font-sans">
                    Inter (Sans-serif)
                    <span className="block text-xs text-gray-500 mt-1">Modern & Clean</span>
                  </button>
                  <button className="p-4 rounded-xl border border-white/5 hover:border-white/20 bg-zinc-950 text-gray-400 hover:text-white text-left font-serif transition-colors">
                    Playfair (Serif)
                    <span className="block text-xs text-gray-600 mt-1">Editorial & Classic</span>
                  </button>
                  <button className="p-4 rounded-xl border border-white/5 hover:border-white/20 bg-zinc-950 text-gray-400 hover:text-white text-left font-mono transition-colors">
                    JetBrains (Mono)
                    <span className="block text-xs text-gray-600 mt-1">Technical & Precise</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">* Font family switching is a UI mockup for this prototype.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
