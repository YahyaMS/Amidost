import React from 'react';
import { Smartphone, CheckCircle, Heart, AlertCircle, Star, MessageCircle, BookOpen, Users, Calendar, Shield, Brain } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom';

const neobumpFeatures = [
  {
    icon: Brain,
    title: 'Ask Dr. Yahya',
    desc: 'AI-powered Q&A trained on Dr. Yahya\'s medical knowledge. Get evidence-based answers to your questions, 24/7.',
  },
  {
    icon: Calendar,
    title: 'Week-by-Week Guidance',
    desc: 'Content crafted specifically for pregnancy after loss — not generic milestones, but sensitive, stage-appropriate support.',
  },
  {
    icon: Smartphone,
    title: 'Symptom Tracking',
    desc: 'Log symptoms and receive evidence-based guidance tailored to your pregnancy stage and emotional context.',
  },
  {
    icon: BookOpen,
    title: 'Private Journal',
    desc: 'A secure, private space to process the complex mix of joy, grief, hope, and fear that comes with this journey.',
  },
  {
    icon: Users,
    title: 'Safe Community',
    desc: 'Connect with other rainbow mothers who truly understand. A moderated, compassionate space for shared experience.',
  },
  {
    icon: Shield,
    title: 'Privacy-First',
    desc: 'Your data and your story are yours. NeoBump is built with a privacy-first approach from the ground up.',
  },
];

const testimonials = [
  {
    text: "Finally, an app that understands what I'm going through. It doesn't treat this like a normal pregnancy.",
    name: 'Sarah M.',
    tag: 'Rainbow mama',
  },
  {
    text: "The symptom tracker saved me from so many 2 AM panic spirals. Knowing I could log it and get guidance was everything.",
    name: 'Jennifer K.',
    tag: 'NeoBump user',
  },
  {
    text: "This community has been my lifeline through the hardest months. I don't feel so alone anymore.",
    name: 'Amara O.',
    tag: 'NeoBump user',
  },
];

const ProductsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="Apps & Publications"
          subtitle="Digital tools and comprehensive guides designed to be your daily health companion."
        />

        {/* NeoBump App Section */}
        <div className="mb-24">
          {/* Hero card */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-600 rounded-full filter blur-[160px] opacity-15 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500 rounded-full filter blur-[160px] opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-0 relative z-10">
              {/* Left content */}
              <div className="p-8 md:p-14 text-white flex flex-col justify-center">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <AlertCircle size={11} /> Testing Stage
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Android Available
                  </span>
                </div>

                {/* App name & tagline */}
                <h2 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight">NeoBump</h2>
                <p className="text-rose-300 text-lg font-light italic mb-6">
                  "Pregnancy After Loss Deserves Better Support"
                </p>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  A compassionate mobile companion built exclusively for rainbow mothers — women navigating the profound
                  joy and anxiety of pregnancy after loss. Designed by Dr. Yahya MS, Consultant OB/GYN and trusted by
                  over 1 million followers worldwide.
                </p>

                {/* Stats row */}
                <div className="flex gap-8 mb-8 border-t border-white/10 pt-6">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <div className="text-white font-bold text-xl">4.9</div>
                    <div className="text-slate-400 text-xs">App Rating</div>
                  </div>
                  <div className="border-l border-white/10 pl-8">
                    <div className="text-white font-bold text-xl mb-1">Free</div>
                    <div className="text-slate-400 text-xs">To Start</div>
                  </div>
                  <div className="border-l border-white/10 pl-8">
                    <div className="text-white font-bold text-xl mb-1">24/7</div>
                    <div className="text-slate-400 text-xs">AI Support</div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.yahyams.neobumptemp&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" className="gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.18 23.76a2.4 2.4 0 0 0 2.55-.27l13.09-7.56-3.69-3.7-11.95 11.53zm-1.62-21.3C1.22 2.88 1 3.4 1 4.06v15.88c0 .66.22 1.18.56 1.6l.08.08 8.9-8.9v-.2L1.56 2.46l-.01.01zM20.37 10.5l-2.78-1.6-3.96 3.96 3.96 3.96 2.8-1.62c.8-.46.8-1.22 0-1.68l-2.02-1.16 2.02-1.16c.8-.46.8-1.22-.02-1.7zM5.73.51L18.82 8.07 15.13 11.76 3.18.23A2.4 2.4 0 0 1 5.73.51z" />
                      </svg>
                      Download on Google Play
                    </Button>
                  </a>
                  <Button variant="dark" className="border border-slate-700 hover:bg-slate-800 opacity-60 cursor-not-allowed" disabled>
                    iOS — Coming Soon
                  </Button>
                </div>
                <p className="text-slate-500 text-xs mt-4">
                  Currently in testing phase. Available to selected users on Android.
                </p>
              </div>

              {/* Right — Phone mockup */}
              <div className="flex items-center justify-center p-8 md:p-12">
                <div className="w-[260px] h-[540px] bg-slate-800 border-[7px] border-slate-700 rounded-[2.8rem] shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-rose-600 flex items-center justify-center">
                    <div className="w-20 h-4 bg-slate-900 rounded-full"></div>
                  </div>
                  {/* Screen content */}
                  <div className="absolute top-0 w-full h-full bg-white overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-b from-rose-600 to-rose-500 h-36 pt-8 px-5 pb-4">
                      <div className="text-white font-extrabold text-lg tracking-tight">NeoBump</div>
                      <div className="text-rose-100 text-xs mt-1">Week 16 · Rainbow Journey</div>
                      <div className="mt-2 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={9} className="text-amber-300" fill="currentColor" />
                        ))}
                        <span className="text-rose-200 text-xs ml-1">4.9</span>
                      </div>
                    </div>
                    {/* Cards */}
                    <div className="p-4 space-y-3 -mt-2">
                      <div className="bg-white p-3 rounded-xl shadow border border-slate-100">
                        <div className="text-xs text-slate-400 font-bold uppercase mb-1">Daily Check-in</div>
                        <div className="text-slate-800 text-xs font-medium">How are you feeling today?</div>
                        <div className="flex gap-2 mt-2">
                          {['😊','😔','😰','🙏'].map((e, i) => (
                            <div key={i} className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-base border border-slate-100">{e}</div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-rose-50 p-3 rounded-xl border border-rose-100 flex items-center gap-3">
                        <div className="bg-rose-500 p-1.5 rounded-full text-white">
                          <Heart size={12} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 text-xs">Ask Dr. Yahya</div>
                          <div className="text-slate-500 text-xs">AI support · 24/7</div>
                        </div>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-xl border border-teal-100">
                        <div className="text-xs text-teal-600 font-bold mb-1">This Week</div>
                        <div className="text-slate-800 text-xs">Baby's ears are developing. Your feelings are valid.</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-xl border border-purple-100 flex items-center gap-3">
                        <div className="bg-purple-500 p-1.5 rounded-full text-white">
                          <Users size={12} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 text-xs">Safe Community</div>
                          <div className="text-slate-500 text-xs">3 new messages</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Everything You Need on This Journey</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {neobumpFeatures.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-rose-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-500 transition-colors duration-300">
                    <f.icon size={22} className="text-rose-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-12 bg-rose-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">What Rainbow Mothers Are Saying</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-rose-500 text-xs">{t.tag}</div>
                  </div>
                </div>
              ))}
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
