import React from 'react';
import { Smartphone, CheckCircle, Heart, AlertCircle } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="Apps & Publications"
          subtitle="Digital tools and comprehensive guides designed to be your daily health companion."
        />

        {/* Apps Section */}
        <div className="mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500 rounded-full filter blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500 px-3 py-1 rounded-full text-xs font-bold mb-6 text-slate-900">
                  <AlertCircle size={12} /> IN DEVELOPMENT
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Pregnancy After Loss App</h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  A compassionate companion for women navigating pregnancy after experiencing loss. This app provides specialized support, tracking, and expert guidance tailored to the unique emotional and medical needs of this journey.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-rose-500" size={20} />
                    <span>Anxiety management tools and resources</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-rose-500" size={20} />
                    <span>Weekly pregnancy tracking with sensitivity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-rose-500" size={20} />
                    <span>Direct connection to specialist support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-rose-500" size={20} />
                    <span>Community forum with moderated discussions</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <Button variant="primary">Join Waitlist</Button>
                  </Link>
                  <Button variant="dark" className="border border-slate-700 hover:bg-slate-800" disabled>
                    Coming Soon
                  </Button>
                </div>
                <p className="text-slate-400 text-sm mt-4">Expected launch: Q2 2026</p>
              </div>
              <div className="flex justify-center">
                {/* Mock Phone UI */}
                <div className="w-[280px] h-[580px] bg-slate-800 border-8 border-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 w-full h-full bg-white">
                    <div className="bg-rose-500 h-32 rounded-b-[2rem] p-6 pt-12">
                      <div className="text-white font-bold text-xl">Your Journey</div>
                      <div className="text-rose-100 text-sm">Week 12 • Second Trimester</div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                        <div className="text-xs text-slate-400 uppercase font-bold mb-1">Daily Check-in</div>
                        <div className="text-slate-800 text-sm font-medium">How are you feeling today?</div>
                      </div>
                      <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 flex items-center gap-3">
                        <div className="bg-white p-2 rounded-full text-rose-500">
                          <Heart size={16} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800">Support Available</div>
                          <div className="text-xs text-slate-500">24/7 Resources</div>
                        </div>
                      </div>
                      <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                        <div className="text-xs text-teal-600 font-bold mb-1">This Week</div>
                        <div className="text-slate-800 text-sm">Baby is the size of a lime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Publications & Resources</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "The Metabolic Woman",
              desc: "Understanding how your metabolism dictates your health.",
              cover: "bg-rose-100",
              status: "In Development"
            },
            {
              title: "Navigating Pregnancy",
              desc: "A week-by-week guide from obstetric experts.",
              cover: "bg-teal-100",
              status: "In Development"
            },
            {
              title: "Childbirth Preparedness",
              desc: "What every expectant mother needs to know.",
              cover: "bg-amber-100",
              status: "In Development"
            },
            {
              title: "Guide to Menopause",
              desc: "Thriving through the transition years.",
              cover: "bg-indigo-100",
              status: "In Development"
            }
          ].map((book, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className={`aspect-[3/4] ${book.cover} rounded-r-2xl rounded-l-md shadow-md mb-6 relative transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/10 rounded-l-md"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="font-serif font-bold text-slate-800 text-xl">{book.title}</div>
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-slate-900 px-3 py-1 text-xs font-bold rounded-full shadow-sm">
                  {book.status}
                </div>
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                {book.title}
              </h4>
              <p className="text-sm text-slate-600">{book.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Stay Updated on Our Products</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Be the first to know when our apps and publications launch. Join our mailing list for exclusive early access.
          </p>
          <Link to="/contact">
            <Button variant="primary">Get Notified</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
