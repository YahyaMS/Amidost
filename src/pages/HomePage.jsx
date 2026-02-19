import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Globe, Youtube, CheckCircle, Activity, Baby, Smartphone, Thermometer, Flame, Heart } from 'lucide-react';
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
    </>
  );
};

export default HomePage;
