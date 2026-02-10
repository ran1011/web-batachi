
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { name: 'Telegram', url: '#', icon: 'TG' },
    { name: 'Facebook', url: '#', icon: 'FB' },
    { name: 'Instagram', url: '#', icon: 'IG' },
    { name: 'TikTok', url: '#', icon: 'TK' },
  ];

  return (
    <div className="min-h-screen pt-48 px-6 pb-24 max-w-7xl mx-auto">
      <div className="text-center mb-24 animate-luxury">
         <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Experience BATACHI</span>
         <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight font-serif mb-10 leading-none">Hubungi Kami.</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        <div className="admin-card p-10 md:p-20 rounded-[50px] border border-white/5 shadow-2xl flex flex-col justify-center">
          <h3 className="text-3xl font-serif mb-12 text-white tracking-tight">Pelayanan Eksklusif</h3>
          
          <div className="space-y-12">
            <div className="group">
              <h4 className="text-gold text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Official Channels</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map(social => (
                  <a 
                    key={social.name}
                    href={social.url}
                    className="px-6 py-3 border border-white/10 rounded-full text-white/60 hover:text-gold hover:border-gold transition-all text-[10px] font-bold uppercase tracking-widest"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="group">
              <h4 className="text-gold text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Reservasi & WA</h4>
              <a href="https://wa.me/628123456789" className="text-2xl md:text-4xl font-serif text-white group-hover:text-gold transition-colors duration-500">
                +62 812 3456 789
              </a>
            </div>
            
            <div className="group">
              <h4 className="text-gold text-[9px] font-bold uppercase tracking-[0.4em] mb-4">Lokasi Kami</h4>
              <p className="text-2xl md:text-3xl font-serif text-white leading-snug">
                Jl. Kemang Raya No. 42,<br />Jakarta Selatan
              </p>
            </div>
          </div>
        </div>

        <div className="relative group rounded-[50px] overflow-hidden shadow-2xl border border-white/5">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.126588647037!2d106.81231647413663!3d-6.247072593741334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1687f87967b%3A0xf639a04655f6764d!2sKemang%20Raya!5e0!3m2!1sid!2sid!4v1715421111111!5m2!1sid!2sid" 
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 min-h-[500px] opacity-60 hover:opacity-100"
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
