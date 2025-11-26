import React from 'react';
import { Youtube, Stethoscope, Smartphone, Users, BookOpen, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <SectionHeading
          title="About Amidost Global"
          subtitle="Bridging the gap between complex medical information and everyday understanding."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-rose-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-217358c7e618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Medical Professional"
              className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Who We Are</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Amidost Global Ventures Ltd is a registered Nigerian company (RC 8530225) with a global vision. We were established to revolutionize how women access health information and care.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our mandate extends beyond traditional healthcare. As outlined in our corporate charter, we are committed to <strong className="text-rose-600">Massive Health Sensitization</strong>. We believe that an informed woman is the cornerstone of a healthy family and society.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Led by a consultant obstetrician and gynaecologist, our team brings deep medical expertise combined with a passion for clear, accessible health communication.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-rose-500 pl-4">
                <h4 className="font-bold text-slate-900">Mission</h4>
                <p className="text-sm text-slate-500 mt-1">To democratize access to specialized women's health knowledge.</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-bold text-slate-900">Vision</h4>
                <p className="text-sm text-slate-500 mt-1">A world where every woman understands her body and metabolic health.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Objectives */}
        <div className="bg-slate-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Corporate Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Media Services",
                desc: "Establishment of broadcasting services for health news and documentaries through our Friendly Health YouTube channel.",
                icon: Youtube
              },
              {
                title: "Medical Consultancy",
                desc: "Providing specialized healthcare advice and safety consultancy with expert obstetric and gynecological guidance.",
                icon: Stethoscope
              },
              {
                title: "Health Technology",
                desc: "Development of software, apps, and AI for health services including our Pregnancy After Loss app.",
                icon: Smartphone
              },
              {
                title: "Health Sensitization",
                desc: "Conducting massive public awareness campaigns on communicable and non-communicable diseases affecting women.",
                icon: Users
              },
              {
                title: "Education",
                desc: "Publishing books, journals, and digital content for medical education and public health literacy.",
                icon: BookOpen
              },
              {
                title: "Medical Equipment",
                desc: "Supply of diagnostic and surgical equipment to improve local healthcare capacity in underserved areas.",
                icon: ShieldCheck
              },
            ].map((obj, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm text-rose-500 flex-shrink-0">
                  <obj.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{obj.title}</h4>
                  <p className="text-sm text-slate-600">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
