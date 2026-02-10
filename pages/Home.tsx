
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';

const Home: React.FC = () => {
  const [dailyQuote, setDailyQuote] = useState<string>("Kemewahan rasa dalam setiap gigitan, disajikan dengan cinta.");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDailyInspiration() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Tuliskan satu kalimat sambutan pendek (maksimal 10 kata) untuk restoran mewah 'BATACHI'. Gunakan gaya bahasa elegan dan mengundang selera.",
          config: {
            systemInstruction: "Anda adalah kurator makanan di majalah gaya hidup mewah.",
            temperature: 1.0,
          }
        });
        if (response.text) {
          setDailyQuote(response.text.trim().replace(/"/g, ''));
        }
      } catch (err) {
        console.error("Gemini failed", err);
      } finally {
        setLoading(false);
      }
    }
    getDailyInspiration();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-start justify-center relative px-6 md:px-24 pt-32 pb-20">
      <div className="relative z-10 max-w-5xl animate-luxury">
        <div className="flex items-center gap-6 mb-12">
            <span className="w-12 md:w-20 h-[1.5px] bg-gold"></span>
            <p className="text-gold text-[9px] md:text-[11px] font-bold tracking-[0.5em] uppercase">
              BATACHI LUXURY EXPERIENCE
            </p>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-bold text-white tracking-tighter leading-[0.9] mb-14 font-serif">
          Luxury<br />
          <span className="text-gold italic ml-2 md:ml-10">Refined.</span>
        </h1>
        
        <div className="max-w-2xl mb-16 relative">
          <div className="absolute -left-6 top-0 w-[1px] h-full bg-gold/30"></div>
          <p className={`text-gray-300 text-xl md:text-3xl font-light italic leading-relaxed transition-all duration-1000 ${loading ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            "{dailyQuote}"
          </p>
          <div className="flex items-center gap-3 mt-8">
             <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: '0.4s' }}></div>
             </div>
             <p className="text-gold/50 text-[8px] uppercase tracking-[0.3em] font-bold">Chef's Daily Inspiration</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-10 items-center">
          <Link 
            to="/menu" 
            className="px-14 py-6 bg-gold text-black rounded-full font-bold hover:scale-105 transition-all duration-500 text-[10px] uppercase tracking-[0.3em] gold-shadow"
          >
            Eksplorasi Menu
          </Link>
          
          <div className="flex gap-10 items-center border-l border-white/10 pl-10">
             <div className="flex flex-col gap-1">
                <span className="text-gold/40 text-[7px] uppercase tracking-[0.4em] font-bold">Operational</span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">10:00 — 22:00</span>
             </div>
          </div>
        </div>
      </div>

      {/* Decorative Large Letter */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden 2xl:block opacity-[0.05] pointer-events-none select-none text-gold">
        <span className="text-[40rem] font-serif leading-none">B</span>
      </div>
    </div>
  );
};

export default Home;
