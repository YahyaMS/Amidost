import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Calendar, Clock, User, ArrowLeft, Share2, Loader } from 'lucide-react';
import SEO from '../components/shared/SEO';
import Button from '../components/shared/Button';

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      // Try to find by slug first
      const articlesRef = collection(db, 'articles');
      const q = query(articlesRef, where('slug', '==', slug), limit(1));
      const querySnapshot = await getDocs(q);

      let articleData = null;

      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        articleData = { id: docSnap.id, ...docSnap.data() };
      } else {
        // Fallback to ID lookup
        const docRef = doc(db, 'articles', slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          articleData = { id: docSnap.id, ...docSnap.data() };
        }
      }

      if (articleData) {
        setArticle(articleData);
        fetchRelatedArticles(articleData.category);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedArticles = async (category) => {
    try {
      const articlesRef = collection(db, 'articles');
      const q = query(
        articlesRef,
        where('category', '==', category),
        limit(3)
      );

      const querySnapshot = await getDocs(q);
      const articles = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(a => a.id !== article?.id);

      setRelatedArticles(articles);
    } catch (error) {
      console.error('Error fetching related articles:', error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Recently';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <Loader className="animate-spin text-rose-500" size={40} />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-6xl mb-6">📄</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/blog">
          <Button variant="primary">
            <ArrowLeft size={20} /> Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO
        title={article.title}
        description={article.excerpt || article.content?.substring(0, 160)}
        url={`https://amidost.com/blog/${slug}`}
        image={article.featuredImage}
        type="article"
      />

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-16 md:py-24">
        {article.featuredImage && (
          <>
            <div className="absolute inset-0 z-0">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/90"></div>
          </>
        )}

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 mb-6">
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          {/* Category Badge */}
          <div className="inline-block bg-rose-500 px-4 py-1 rounded-full text-sm font-bold mb-6">
            {article.category || 'Health'}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl leading-tight">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-xl text-slate-300 mb-8 max-w-3xl">
              {article.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            {article.author && (
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime || '5'} min read</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 hover:text-white transition-colors ml-auto"
            >
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-bold
            prose-ul:my-6 prose-li:my-2
            prose-img:rounded-2xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {article.authorBio && (
          <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {article.author?.charAt(0) || 'A'}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{article.author}</h4>
                <p className="text-slate-600 text-sm">Medical Expert</p>
              </div>
            </div>
            <p className="text-slate-600">{article.authorBio}</p>
          </div>
        )}
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug || related.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-40 bg-slate-100">
                    {related.featuredImage ? (
                      <img
                        src={related.featuredImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-100 to-rose-200">
                        <span className="text-3xl">📄</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-500">{formatDate(related.publishedAt)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-rose-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Get the latest health insights delivered to your inbox. Subscribe to our newsletter for expert advice on women's health and wellness.
          </p>
          <Link to="/contact">
            <Button variant="outline">Subscribe to Newsletter</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
