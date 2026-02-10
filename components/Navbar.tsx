
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { initialSettings } from '../data/menu';
import { SiteSettings } from '../types';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    
    const savedSettings = localStorage.getItem('batachi_settings');
    if (savedSettings) setSettings(JSON.parse(savedSettings));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Beranda' },
    { path: '/menu', name: 'Menu' },
    { path: '/pre-order', name: 'Pre-Order' },
    { path: '/gallery', name: 'Galeri' },
    { path: '/contact', name: 'Kontak' },
  ];

  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled || isAdmin ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-8">
        <div className="flex-shrink-0">
          <Link to="/" className="flex flex-col group">
            {settings.logoUrl ? (
              <img src={settings.logoUrl} alt={settings.restaurantName} className="h-12 md:h-16 w-auto object-contain" />
            ) : (
              <>
                <span className="text-2xl md:text-3xl font-bold tracking-[0.25em] font-serif leading-none group-hover:text-gold transition-all duration-500 text-white">
                  {settings.restaurantName}<span className="text-gold">.</span>
                </span>
                <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-gold/60 mt-2 font-bold opacity-70">
                  Cuisine & Hospitality
                </span>
              </>
            )}
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-300 hover:text-gold relative group ${
                location.pathname === link.path ? 'text-gold' : 'text-gray-400'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-gold transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 flex-shrink-0">
          <Link 
            to="/pre-order"
            className="hidden sm:inline-block px-10 py-3.5 bg-gold text-black rounded-full text-[9px] font-bold hover:scale-105 transition-all duration-500 uppercase tracking-[0.3em] gold-shadow"
          >
            Pesan PO
          </Link>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <div className="w-8 flex flex-col gap-1.5 items-end">
              <span className={`h-[2px] bg-gold transition-all duration-300 ${mobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
              <span className={`h-[2px] bg-gold transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`h-[2px] bg-gold transition-all duration-300 ${mobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 z-[90] bg-black transition-all duration-700 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif text-white hover:text-gold tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/pre-order"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-14 py-5 bg-gold text-black rounded-full text-[10px] font-bold uppercase tracking-widest"
          >
            Sistem PO
          </Link>
          <button onClick={() => setMobileMenuOpen(false)} className="mt-16 text-gray-500 uppercase text-[9px] tracking-widest">Tutup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
