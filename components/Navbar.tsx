
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Beranda' },
    { path: '/menu', name: 'Menu' },
    { path: '/gallery', name: 'Galeri' },
    { path: '/contact', name: 'Kontak' },
  ];

  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      isScrolled || isAdmin ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-bold tracking-[0.25em] font-serif leading-none group-hover:text-gold transition-all duration-500 text-white">
              BATACHI<span className="text-gold">.</span>
            </span>
            <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-gold/60 mt-2 font-bold opacity-70">
              Cuisine & Hospitality
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Center */}
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

        {/* Right Action */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <a 
            href="https://wa.me/628123456789" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-10 py-3.5 bg-gold text-black rounded-full text-[9px] font-bold hover:scale-105 transition-all duration-500 uppercase tracking-[0.3em] gold-shadow"
          >
            Reservasi
          </a>
          
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

      {/* Mobile Menu */}
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
          <a 
            href="https://wa.me/628123456789"
            className="mt-8 px-14 py-5 bg-gold text-black rounded-full text-[10px] font-bold uppercase tracking-widest"
          >
            WhatsApp Kami
          </a>
          <button onClick={() => setMobileMenuOpen(false)} className="mt-16 text-gray-500 uppercase text-[9px] tracking-widest">Tutup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
