import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <div
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-100 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors duration-300">
      <Icon size={28} className="text-rose-500 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;
