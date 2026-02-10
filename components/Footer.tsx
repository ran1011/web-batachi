
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initialSettings } from '../data/menu';
import { SiteSettings } from '../types';

const Footer: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);

  useEffect(() => {
    const savedSettings = localStorage.getItem('batachi_settings');
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  const socials = [
    { name: 'IG', url: '#' },
    { name: 'FB', url: '#' },
    { name: 'TK', url: '#' },
    { name: 'TG', url: '#' },
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          {settings.logoUrl ? (
            <img src={settings.logoUrl} alt={settings.restaurantName} className="h-12 w-auto mb-6 object-contain" />
          ) : (
            <h2 className="text-3xl font-bold mb-6 font-serif text-white">
              {settings.restaurantName}<span className="text-gold">.</span>
            </h2>
          )}
          <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8 font-light">
            Elegansi kuliner dalam setiap hidangan. Melayani dine-in premium dan pengiriman eksklusif dengan standar kenyamanan tertinggi.
          </p>
          <div className="flex gap-4">
             {socials.map(s => (
               <a key={s.name} href={s.url} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all text-[10px] font-bold">{s.name}</a>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-gold font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Navigasi</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Beranda</Link></li>
            <li><Link to="/menu" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Menu Harian</Link></li>
            <li><Link to="/pre-order" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Sistem PO</Link></li>
            <li><Link to="/gallery" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Galeri Foto</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-gold font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Jam Operasional</h4>
          <p className="text-white/40 text-sm mb-4 font-light leading-relaxed">Buka setiap hari untuk pengalaman terbaik Anda.</p>
          <p className="text-white font-bold text-sm tracking-widest">10:00 - 22:00 WIB</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2024 {settings.restaurantName} RESTO. Currency in Thai Baht (฿).</p>
        <Link to="/admin" className="text-white/5 text-[9px] hover:text-gold transition-all">Control Panel</Link>
      </div>
    </footer>
  );
};

export default Footer;
