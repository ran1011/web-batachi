
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 font-serif text-white">BATACHI<span className="text-gold">.</span></h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8 font-light">
            Simbol keunggulan rasa dan elegansi kuliner. BATACHI menghadirkan perpaduan bahan premium dengan layanan makan di tempat maupun delivery ke seluruh penjuru kota.
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">IG</a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">FB</a>
          </div>
        </div>
        
        <div>
          <h4 className="text-gold font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Navigasi</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Beranda</Link></li>
            <li><Link to="/menu" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Menu Harian</Link></li>
            <li><Link to="/gallery" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Galeri Foto</Link></li>
            <li><Link to="/contact" className="text-white/40 text-sm hover:text-gold transition-colors font-light">Hubungi Kami</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-gold font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Lokasi</h4>
          <p className="text-white/40 text-sm mb-4 font-light leading-relaxed">Jl. Kemang Raya No. 42,<br />Jakarta Selatan, 12730</p>
          <p className="text-white/40 text-sm font-light">10:00 - 22:00 WIB</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2024 BATACHI RESTO. Private Admin Dashboard Access.</p>
        <Link to="/admin" className="text-white/5 text-[9px] hover:text-gold transition-all">Admin Access</Link>
      </div>
    </footer>
  );
};

export default Footer;
