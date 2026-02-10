
import React, { useState, useEffect } from 'react';
import { menuData as initialData } from '../data/menu';
import { GalleryItem } from '../types';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const savedGallery = localStorage.getItem('batachi_gallery');
    if (savedGallery) {
      setGallery(JSON.parse(savedGallery));
    } else {
      setGallery(initialData.gallery as GalleryItem[]);
    }
  }, []);

  return (
    <div className="min-h-screen pt-44 px-6 pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-24 animate-luxury">
        <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">The Visual Essence</span>
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight font-serif mb-6 leading-tight">Batachi Moments.</h2>
        <div className="w-24 h-px bg-gold mx-auto"></div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
        {gallery.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedImage(item)}
            className="relative rounded-[40px] overflow-hidden bg-white/5 cursor-pointer group break-inside-avoid border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl"
          >
            <img 
              src={item.url} 
              alt={item.caption} 
              className="w-full h-auto object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
              <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-16 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center animate-luxury">
             <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 z-10 text-white/40 p-4 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest"
              >
                ✕ Close Preview
              </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-[75vh] object-contain rounded-[40px] shadow-2xl border border-white/10"
            />
            <p className="text-gold mt-12 text-3xl font-serif italic text-center leading-relaxed">"{selectedImage.caption}"</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
