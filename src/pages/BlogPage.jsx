import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Calendar, Clock, User, ArrowRight, Loader } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import SEO from '../components/shared/SEO';

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Metabolic Health', 'Pregnancy', 'Gynecology', 'Wellness', 'Nutrition'];

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(
        articlesRef,
        orderBy('publishedAt', 'desc'),
        limit(50)
      );

      const querySnapshot = await getDocs(q);
      const articlesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setArticles(articlesData);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Recently';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 animate-in fade-in duration-500">
      <SEO
        title="Health Blog & Articles"
        description="Expert articles on women's health, metabolic wellness, pregnancy, and gynecology from Amidost Global's medical team."
        url="https://amidost.com/blog"
      />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="Health Blog & Articles"
          subtitle="Expert insights on women's health, metabolic wellness, and medical guidance from our consultant obstetrician and gynaecologist."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                  : 'bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-rose-500" size={40} />
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Articles Yet</h3>
            <p className="text-slate-600">Check back soon for expert health articles!</p>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && filteredArticles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug || article.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-100"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  {article.featuredImage ? (
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-rose-200">
                      <span className="text-4xl">📄</span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-rose-600">
                    {article.category || 'Health'}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {truncateText(article.excerpt || article.content || '')}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime || '5'} min read</span>
                    </div>
                  </div>

                  {/* Author */}
                  {article.author && (
                    <div className="flex items-center gap-2 text-sm border-t border-slate-100 pt-4">
                      <User size={14} className="text-slate-400" />
                      <span className="text-slate-600">{article.author}</span>
                    </div>
                  )}

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-rose-600 font-semibold mt-4 group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination (Optional - Add later if needed) */}
        {filteredArticles.length > 9 && (
          <div className="mt-12 flex justify-center">
            <button className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-rose-500 hover:text-rose-600 transition-colors">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
