import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Globe, Youtube, CheckCircle, Activity, Baby, Smartphone, Thermometer, Flame, Heart, Star, Brain, Users, BookOpen } from 'lucide-react';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import FeatureCard from '../components/shared/FeatureCard';
import SEO from '../components/shared/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Amidost Global - Women's Health & Metabolic Wellness"
        description="Trusted by 1M+ subscribers. Expert guidance on women's health, metabolic wellness, pregnancy from a consultant obstetrician and gynaecologist in Nigeria."
        url="https://amidost.com"
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Women's Health"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-in slide-in-from-left-5 duration-1000">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-rose-200 font-medium text-sm">
              <Globe size={14} /> Registered in Nigeria • Global Impact
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Elevating <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Women's Health</span> Through Media & Tech
            </h1>
            <p className="text-xl text-slate-200 max-w-lg leading-relaxed font-light">
              Amidost Global Ventures combines medical expertise with mass media to empower women. From metabolic health to maternity, we are your trusted guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://www.youtube.com/@FriendlyHealth" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                  <Play size={20} fill="currentColor" /> Watch Our Content
                </Button>
              </a>
              <Link to="/about">
                <Button variant="outline">Learn About Us</Button>
              </Link>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="hidden md:block justify-self-end animate-in slide-in-from-right-5 duration-1000 delay-200">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-sm hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-red-500 to-red-700 p-4 rounded-2xl text-white shadow-lg shadow-red-900/50">
                  <Youtube size={32} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-3xl">1 Million+</h3>
                  <p className="text-rose-200 text-sm font-medium">Subscribers Trust Us</p>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  "Metabolic Health Coaching",
                  "Pregnancy & Childbirth",
                  "Medical Consultancy",
                  "Health Technology"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white group">
                    <div className="bg-emerald-500/20 p-1 rounded-full text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-light tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Core Pillars"
            subtitle="We operate at the intersection of healthcare, technology, and media to deliver comprehensive wellness solutions."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Activity}
              title="Metabolic Health"
              description="Specialized guidance on optimizing hormonal balance, energy regulation, and long-term vitality for women."
              delay={100}
            />
            <FeatureCard
              icon={Baby}
              title="Obstetrics & Gynaecology"
              description="Expert-led resources covering the entire journey from conception to postpartum care and menopause."
              delay={200}
            />
            <FeatureCard
              icon={Smartphone}
              title="Health Technology"
              description="Leveraging digital platforms and mobile applications to make professional health advice accessible to all."
              delay={300}
            />
            <FeatureCard
              icon={Thermometer}
              title="Perimenopause"
              description="Recognizing and navigating the transitional phase before menopause — from irregular cycles to hormonal fluctuations and mood changes."
              delay={400}
            />
            <FeatureCard
              icon={Flame}
              title="Menopause"
              description="Comprehensive support for women going through menopause, including managing hot flashes, sleep disruption, and hormonal health."
              delay={500}
            />
            <FeatureCard
              icon={Heart}
              title="Midlife Care"
              description="Holistic health strategies for women in midlife — covering cardiovascular health, bone density, mental wellness, and preventive care."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* NeoBump App Spotlight */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        {/* Background glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-600 rounded-full filter blur-[180px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500 rounded-full filter blur-[180px] opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — content */}
            <div className="text-white space-y-7">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Now in Testing
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Android Available
                </span>
              </div>

              <div>
                <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-2">Introducing</p>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">NeoBump</h2>
                <p className="text-rose-300 text-lg font-light italic">
                  "Pregnancy After Loss Deserves Better Support"
                </p>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                A compassionate mobile app built exclusively for rainbow mothers — women navigating the unique emotional and medical challenges of pregnancy after loss. Developed by Dr. Yahya MS, Consultant OB/GYN, trusted by over 1 million followers.
              </p>

              {/* Mini feature list */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Brain, label: 'Ask Dr. Yahya AI' },
                  { icon: Smartphone, label: 'Symptom Tracking' },
                  { icon: BookOpen, label: 'Private Journal' },
                  { icon: Users, label: 'Safe Community' },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <div className="bg-rose-500/20 p-1.5 rounded-lg text-rose-400">
                      <Icon size={14} />
                    </div>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>

              {/* Rating + stats */}
              <div className="flex gap-8 border-t border-white/10 pt-6">
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                  </div>
                  <div className="text-white font-bold">4.9</div>
                  <div className="text-slate-500 text-xs">Rating</div>
                </div>
                <div className="border-l border-white/10 pl-8">
                  <div className="text-white font-bold">Free</div>
                  <div className="text-slate-500 text-xs">To Start</div>
                </div>
                <div className="border-l border-white/10 pl-8">
                  <div className="text-white font-bold">24/7</div>
                  <div className="text-slate-500 text-xs">AI Support</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.yahyams.neobumptemp&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Download on Android</Button>
                </a>
                <Link to="/products">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Right — phone mockup + testimonial */}
            <div className="flex flex-col items-center gap-8">
              {/* Phone */}
              <div className="w-[240px] h-[500px] bg-slate-800 border-[6px] border-slate-700 rounded-[2.6rem] shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                <div className="absolute top-0 w-full h-full bg-white overflow-hidden">
                  <div className="bg-gradient-to-b from-rose-600 to-rose-500 h-32 pt-7 px-5 pb-3">
                    <div className="text-white font-extrabold text-base tracking-tight">NeoBump</div>
                    <div className="text-rose-100 text-xs mt-0.5">Week 16 · Rainbow Journey</div>
                    <div className="mt-2 flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} className="text-amber-300" fill="currentColor" />)}
                      <span className="text-rose-200 text-xs ml-1">4.9</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2.5 -mt-1">
                    <div className="bg-white p-3 rounded-xl shadow border border-slate-100">
                      <div className="text-xs text-slate-400 font-bold uppercase mb-1">Daily Check-in</div>
                      <div className="flex gap-2 mt-1">
                        {['😊','😔','😰','🙏'].map((e, i) => (
                          <div key={i} className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-sm border border-slate-100">{e}</div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-xl border border-rose-100 flex items-center gap-2">
                      <div className="bg-rose-500 p-1.5 rounded-full text-white"><Heart size={11} /></div>
                      <div>
                        <div className="font-bold text-slate-800 text-xs">Ask Dr. Yahya</div>
                        <div className="text-slate-500 text-xs">AI · 24/7</div>
                      </div>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-xl border border-teal-100">
                      <div className="text-xs text-teal-600 font-bold mb-0.5">This Week</div>
                      <div className="text-slate-800 text-xs">Your feelings are valid. Baby is growing.</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-xl border border-purple-100 flex items-center gap-2">
                      <div className="bg-purple-500 p-1.5 rounded-full text-white"><Users size={11} /></div>
                      <div>
                        <div className="font-bold text-slate-800 text-xs">Safe Community</div>
                        <div className="text-slate-500 text-xs">3 new messages</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial card below phone */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 max-w-xs w-full">
                <div className="flex gap-0.5 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
                  "Finally, an app that understands. It doesn't treat this like a normal pregnancy."
                </p>
                <div className="text-white text-sm font-semibold">Sarah M.</div>
                <div className="text-rose-400 text-xs">Rainbow mama</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
