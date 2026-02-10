
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';
import { initialBanner } from '../data/menu';
import { BannerConfig } from '../types';

const Home: React.FC = () => {
  const [dailyQuote, setDailyQuote] = useState<string>("Kemewahan rasa dalam setiap gigitan, disajikan dengan cinta.");
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState<BannerConfig>(initialBanner);

  useEffect(() => {
    // Load Banner from Local Storage
    const savedBanner = localStorage.getItem('batachi_banner');
    if (savedBanner) setBanner(JSON.parse(savedBanner));

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
    <div className="min-h-screen flex flex-col items-start justify-center relative px-6 md:px-24 pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Image Overrider */}
      <div 
        className="absolute inset-0 w-full h-full -z-20 bg-cover bg-center opacity-30 transition-all duration-1000"
        style={{ backgroundImage: `url('${banner.backgroundImage}')` }}
      ></div>

      <div className="relative z-10 max-w-5xl animate-luxury">
        <div className="flex items-center gap-6 mb-12">
            <span className="w-12 md:w-20 h-[1.5px] bg-gold"></span>
            <p className="text-gold text-[9px] md:text-[11px] font-bold tracking-[0.5em] uppercase">
              BATACHI LUXURY EXPERIENCE
            </p>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-bold text-white tracking-tighter leading-[0.9] mb-14 font-serif">
          {banner.title}<br />
          <span className="text-gold italic ml-2 md:ml-10">{banner.subtitle}</span>
        </h1>
        
        <div className="max-w-2xl mb-16 relative">
          <div className="absolute -left-6 top-0 w-[1px] h-full bg-gold/30"></div>
          <p className={`text-gray-300 text-xl md:text-3xl font-light italic leading-relaxed transition-all duration-1000 ${loading ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            "{dailyQuote}"
          </p>
        </div>
        
        <div className="flex flex-wrap gap-10 items-center">
          <Link 
            to="/menu" 
            className="px-14 py-6 bg-gold text-black rounded-full font-bold hover:scale-105 transition-all duration-500 text-[10px] uppercase tracking-[0.3em] gold-shadow"
          >
            Eksplorasi Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
