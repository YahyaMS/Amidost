import React from 'react';
import { Play } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';

const MediaPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-rose-50/50 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="Friendly Health Media"
          subtitle="Our YouTube channel, Friendly Health, serves over 1 Million subscribers with high-quality medical animations, expert talks, and health guides."
        />

        {/* Featured Video - Embed Real YouTube */}
        <div className="mb-16 bg-white rounded-3xl overflow-hidden shadow-xl border border-rose-100">
          <div className="grid md:grid-cols-2">
            <div className="bg-slate-900 relative group cursor-pointer h-[300px] md:h-auto">
              {/* YouTube Embed Placeholder - Replace with actual video ID */}
              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fEp6jVcDx8s?si=MB_lXpIwEOWVbOxW"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                Featured Episode
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Understanding Women's Metabolic Health</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                In this deep dive, we explore how metabolic health directly impacts fertility, energy levels, and long-term wellness. Essential viewing for all women interested in optimizing their health.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
                <span>Educational Series</span>
                <span>•</span>
                <span>Expert-Led Content</span>
              </div>
              <a href="https://www.youtube.com/@FriendlyHealth" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="self-start">Visit @FriendlyHealth Channel</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Channel Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 text-center">
            <div className="text-4xl font-bold text-rose-600 mb-2">1M+</div>
            <p className="text-slate-600">Subscribers</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 text-center">
            <div className="text-4xl font-bold text-rose-600 mb-2">500+</div>
            <p className="text-slate-600">Educational Videos</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 text-center">
            <div className="text-4xl font-bold text-rose-600 mb-2">Global</div>
            <p className="text-slate-600">Audience Reach</p>
          </div>
        </div>

        {/* Content Categories */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8">What We Cover</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pregnancy Journey",
              desc: "Week-by-week pregnancy guides, childbirth preparation, and postpartum care.",
              img: "https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Metabolic Health",
              desc: "PCOS, insulin resistance, hormonal balance, and metabolic optimization.",
              img: "https://images.unsplash.com/photo-1606214952044-f8976b97607a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Women's Wellness",
              desc: "Menopause management, fertility health, and preventive care strategies.",
              img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
          ].map((category, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 p-3 rounded-full">
                    <Play size={20} className="text-slate-900" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 mb-2">{category.title}</h4>
                <p className="text-sm text-slate-600">{category.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Subscribe to Friendly Health on YouTube for weekly expert content on women's health, pregnancy, and metabolic wellness.
          </p>
          <a href="https://www.youtube.com/@FriendlyHealth?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
              Subscribe Now on YouTube
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
