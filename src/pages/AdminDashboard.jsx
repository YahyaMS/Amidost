import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { db } from '../config/firebase';
import { Plus, Edit2, Trash2, Eye, LogOut, Save, X, Loader } from 'lucide-react';
import Button from '../components/shared/Button';

const AdminDashboard = () => {
  // ADMIN EMAIL - Change this to your admin email
  const ADMIN_EMAIL = 'info@amidost.com';

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [saving, setSaving] = useState(false);

  // Login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Article form
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Metabolic Health',
    author: 'Dr. Amidost',
    authorBio: 'Consultant Obstetrician and Gynaecologist',
    featuredImage: '',
    tags: '',
    readTime: '5',
    status: 'draft'
  });

  const categories = ['Metabolic Health', 'Pregnancy', 'Gynecology', 'Wellness', 'Nutrition'];

  // Check if current user is admin
  const isAdmin = user && user.email === ADMIN_EMAIL;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        fetchArticles();
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchArticles = async () => {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(articlesRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);

      const articlesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setArticles(articlesData);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    setUser(null);
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && !editingArticle ? { slug: generateSlug(value) } : {})
    }));
  };

  const handleSaveArticle = async () => {
    if (!formData.title || !formData.content) {
      alert('Please fill in title and content');
      return;
    }

    setSaving(true);

    try {
      const articleData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        readTime: parseInt(formData.readTime) || 5,
        updatedAt: serverTimestamp(),
        publishedAt: formData.status === 'published' ? serverTimestamp() : null
      };

      if (editingArticle) {
        // Update existing article
        const articleRef = doc(db, 'articles', editingArticle.id);
        await updateDoc(articleRef, articleData);
      } else {
        // Create new article
        await addDoc(collection(db, 'articles'), {
          ...articleData,
          createdAt: serverTimestamp()
        });
      }

      // Reset form and refresh list
      setShowEditor(false);
      setEditingArticle(null);
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: 'Metabolic Health',
        author: 'Dr. Amidost',
        authorBio: 'Consultant Obstetrician and Gynaecologist',
        featuredImage: '',
        tags: '',
        readTime: '5',
        status: 'draft'
      });
      fetchArticles();
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Error saving article. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleEditArticle = (article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title || '',
      slug: article.slug || '',
      excerpt: article.excerpt || '',
      content: article.content || '',
      category: article.category || 'Metabolic Health',
      author: article.author || 'Dr. Amidost',
      authorBio: article.authorBio || '',
      featuredImage: article.featuredImage || '',
      tags: Array.isArray(article.tags) ? article.tags.join(', ') : '',
      readTime: article.readTime?.toString() || '5',
      status: article.status || 'draft'
    });
    setShowEditor(true);
  };

  const handleDeleteArticle = async (articleId) => {
    if (!window.confirm('Are you sure you want to delete this article?')) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'articles', articleId));
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Error deleting article. Please try again.');
    }
  };

  const handleNewArticle = () => {
    setEditingArticle(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Metabolic Health',
      author: 'Dr. Amidost',
      authorBio: 'Consultant Obstetrician and Gynaecologist',
      featuredImage: '',
      tags: '',
      readTime: '5',
      status: 'draft'
    });
    setShowEditor(true);
  };

  // Login Screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin text-rose-500" size={40} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              AG
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
            <p className="text-slate-600 mt-2">Sign in to manage blog articles</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="admin@amidost.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // Check if logged-in user is NOT the admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <X className="text-red-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Access Denied</h1>
          <p className="text-slate-600 mb-6">
            You are logged in as <strong>{user.email}</strong>, but this account does not have admin privileges.
          </p>
          <p className="text-sm text-slate-500 mb-6">
            Only the authorized administrator can access this dashboard.
          </p>
          <Button variant="secondary" onClick={handleLogout} className="w-full">
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Blog Admin</h1>
            <p className="text-sm text-slate-600">Manage your articles</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{user.email}</span>
            <Button variant="secondary" onClick={handleLogout} className="py-2">
              <LogOut size={16} /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Editor View */}
        {showEditor ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                {editingArticle ? 'Edit Article' : 'New Article'}
              </h2>
              <button
                onClick={() => setShowEditor(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Enter article title"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="article-url-slug"
                />
                <p className="text-sm text-slate-500 mt-1">URL: /blog/{formData.slug || 'article-slug'}</p>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleFormChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Brief summary for article cards and SEO"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Content (HTML) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleFormChange}
                  rows="15"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 font-mono text-sm"
                  placeholder="<p>Write your article content here in HTML...</p>"
                />
                <p className="text-sm text-slate-500 mt-1">Supports HTML formatting</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Read Time (minutes)</label>
                  <input
                    type="number"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleFormChange}
                    min="1"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Featured Image URL</label>
                <input
                  type="url"
                  name="featuredImage"
                  value={formData.featuredImage}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="health, wellness, pregnancy"
                />
              </div>

              {/* Author Bio */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Author Bio</label>
                <textarea
                  name="authorBio"
                  value={formData.authorBio}
                  onChange={handleFormChange}
                  rows="2"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Short bio about the author"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button
                  variant="primary"
                  onClick={handleSaveArticle}
                  disabled={saving}
                  className="flex-1"
                >
                  {saving ? (
                    <>
                      <Loader className="animate-spin" size={20} /> Saving...
                    </>
                  ) : (
                    <>
                      <Save size={20} /> {editingArticle ? 'Update Article' : 'Save Article'}
                    </>
                  )}
                </Button>
                <Button variant="secondary" onClick={() => setShowEditor(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Articles List View
          <>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">All Articles</h2>
                <p className="text-slate-600">{articles.length} total articles</p>
              </div>
              <Button variant="primary" onClick={handleNewArticle}>
                <Plus size={20} /> New Article
              </Button>
            </div>

            {articles.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Yet</h3>
                <p className="text-slate-600 mb-6">Create your first article to get started</p>
                <Button variant="primary" onClick={handleNewArticle}>
                  <Plus size={20} /> Create First Article
                </Button>
              </div>
            ) : (
              <div className="grid gap-4">
                {articles.map(article => (
                  <div key={article.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-slate-100">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-900">{article.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            article.status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                            {article.status || 'draft'}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm mb-2 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.author}</span>
                          {article.createdAt && (
                            <>
                              <span>•</span>
                              <span>{article.createdAt.toDate?.().toLocaleDateString() || 'Recently'}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => window.open(`/blog/${article.slug || article.id}`, '_blank')}
                          className="p-2 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Preview"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleEditArticle(article)}
                          className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(article.id)}
                          className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
