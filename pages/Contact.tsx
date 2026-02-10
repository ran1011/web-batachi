
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-48 px-6 pb-24 max-w-7xl mx-auto">
      <div className="text-center mb-24 animate-luxury">
         <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Experience BATACHI</span>
         <h2 className="text-5xl md:text-8xl font-bold text-gray-900 tracking-tight font-serif mb-10 leading-none">Kunjungi Kami.</h2>
         <div className="flex flex-wrap justify-center gap-10 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-gray-400">
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Dine-In</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Delivery</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Events</div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        <div className="bg-white/40 backdrop-blur-md p-10 md:p-20 rounded-[50px] border border-white shadow-2xl shadow-gold/5 flex flex-col justify-center">
          <h3 className="text-3xl font-serif mb-12 text-gray-900 tracking-tight">Pelayanan Eksklusif</h3>
          <p className="text-gray-500 text-xl font-light mb-16 leading-relaxed italic border-l-2 border-gold/20 pl-8">
            "Kami percaya bahwa setiap hidangan adalah sebuah karya seni, dan setiap tamu adalah inspirasi kami."
          </p>

          <div className="space-y-12">
            <div className="group">
              <h4 className="text-gold text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Reservasi & WA</h4>
              <a href="https://wa.me/628123456789" className="text-2xl md:text-4xl font-serif text-gray-900 group-hover:text-gold transition-colors duration-500">
                +62 812 3456 789
              </a>
            </div>
            
            <div className="group">
              <h4 className="text-gold text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Lokasi Kami</h4>
              <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug">
                Jl. Kemang Raya No. 42,<br />Jakarta Selatan
              </p>
            </div>

            <div className="pt-10 border-t border-gold/10">
               <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-gray-400 text-[8px] uppercase tracking-[0.3em] mb-2">Buka Setiap Hari</h4>
                    <p className="text-gray-900 font-bold text-lg">10:00 — 22:00 WIB</p>
                  </div>
                  <div className="text-right">
                    <h4 className="text-gray-400 text-[8px] uppercase tracking-[0.3em] mb-2">Parkir</h4>
                    <p className="text-gray-900 font-bold text-lg">Valet Available</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="relative group rounded-[50px] overflow-hidden shadow-2xl border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.126588647037!2d106.81231647413663!3d-6.247072593741334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1687f87967b%3A0xf639a04655f6764d!2sKemang%20Raya!5e0!3m2!1sid!2sid!4v1715421111111!5m2!1sid!2sid" 
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 min-h-[500px]"
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[50px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
