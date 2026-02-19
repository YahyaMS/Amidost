import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../shared/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/media', label: 'Media & TV' },
    { path: '/blog', label: 'Blog' },
    { path: '/products', label: 'Apps & Books' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-rose-500/20">
            AG
          </div>
          <div className={`font-bold text-xl tracking-tight ${isScrolled || !isHomePage ? 'text-slate-900' : 'text-white'}`}>
            Amidost <span className="text-rose-500 font-extrabold">Global</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors relative group ${
                location.pathname === link.path
                  ? 'text-rose-500'
                  : (isScrolled || !isHomePage ? 'text-slate-600 hover:text-rose-500' : 'text-white/90 hover:text-white')
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <a href="https://www.youtube.com/@friendlyhealth" target="_blank" rel="noopener noreferrer">
            <Button
              variant={isScrolled || !isHomePage ? 'primary' : 'outline'}
              className="py-2 px-6 text-sm shadow-none"
            >
              Watch on YouTube
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen
            ? <X size={24} className="text-slate-900" />
            : <Menu size={24} className={isScrolled || !isHomePage ? 'text-slate-900' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-left px-6 py-4 font-medium border-b border-slate-50 hover:bg-rose-50 hover:text-rose-600 transition-colors ${location.pathname === link.path ? 'text-rose-600 bg-rose-50' : 'text-slate-600'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="p-6">
            <a href="https://www.youtube.com/@friendlyhealth" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="primary" className="w-full justify-center">
                Watch on YouTube
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
