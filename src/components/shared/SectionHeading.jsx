import React from 'react';

const SectionHeading = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} animate-in fade-in slide-in-from-bottom-4 duration-700`}>
    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h2>
    <div className={`h-1.5 w-24 bg-rose-500 rounded-full mb-6 ${centered ? 'mx-auto' : ''}`}></div>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
  </div>
);

export default SectionHeading;
