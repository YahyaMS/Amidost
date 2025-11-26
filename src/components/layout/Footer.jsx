import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Smartphone, Users, ChevronRight, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center font-bold">AG</div>
              <span className="font-bold text-xl">Amidost Global</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Pioneering the future of women's metabolic health through the convergence of media, technology, and medical expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@FriendlyHealth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group"
                aria-label="Visit our YouTube channel"
              >
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all duration-300 group"
                aria-label="Download our app"
              >
                <Smartphone size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                aria-label="Join our community"
              >
                <Users size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-rose-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-rose-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-rose-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Media Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rose-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Focus Areas</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Metabolic Health</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Obstetrics</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Gynecology</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Health Sensitization</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Medical Technology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal & Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a></li>
              <li>
                <Link to="/contact" className="hover:text-rose-400 transition-colors">Contact Support</Link>
              </li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Report Issues</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Amidost Global Ventures Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <ShieldCheck size={14} />
            <span>Secure & Compliant (RC 8530225)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
