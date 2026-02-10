
import React, { useState, useEffect } from 'react';
import { menuData as initialData } from '../data/menu';
import { MenuItem, MenuCategory } from '../types';
import MenuCard from '../components/MenuCard';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<string>('Semua');
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const savedMenu = localStorage.getItem('batachi_menu');
    if (savedMenu) {
      setItems(JSON.parse(savedMenu));
    } else {
      setItems(initialData.menu as MenuItem[]);
    }
  }, []);

  const categories = ['Semua', ...Object.values(MenuCategory)];

  const filteredItems = filter === 'Semua' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <div className="min-h-screen pt-44 px-6 pb-20 max-w-7xl mx-auto">
      <div className="text-center mb-20 animate-luxury">
        <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">The Culinary Art</span>
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight font-serif mb-6 leading-tight">Selection Menu.</h2>
        <div className="w-24 h-px bg-gold mx-auto"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-10 py-3 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
              filter === cat 
                ? 'bg-gold text-black gold-shadow' 
                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-gold/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group bg-white/5 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 border border-white/5 hover:border-gold/30"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full border border-gold/40 backdrop-blur-md">
                <span className="text-[10px] font-bold text-gold uppercase tracking-tighter">Rp {item.price.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <div className="p-6">
              <span className="text-[10px] text-gold/40 uppercase tracking-widest block mb-2">{item.category}</span>
              <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors font-serif mb-2">{item.name}</h3>
              <p className="text-xs text-white/50 line-clamp-2 font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail Menu */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl">
          <div className="bg-[#0f0f0f] w-full max-w-6xl rounded-[40px] overflow-hidden flex flex-col md:flex-row relative shadow-2xl border border-white/10 animate-luxury">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-all duration-300"
            >
              ✕
            </button>
            <div className="md:w-1/2 h-[40vh] md:h-auto overflow-hidden">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">{selectedItem.category}</span>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif leading-[1.1]">{selectedItem.name}</h3>
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed italic">
                "{selectedItem.description}"
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10 mt-auto">
                <div className="flex flex-col">
                  <span className="text-gold/40 text-[10px] uppercase tracking-widest mb-1">Investment</span>
                  <span className="text-4xl font-bold text-white font-serif">Rp {selectedItem.price.toLocaleString('id-ID')}</span>
                </div>
                <a 
                  href={`https://wa.me/628123456789?text=Saya ingin memesan menu BATACHI: ${selectedItem.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gold text-black px-12 py-5 rounded-full font-bold hover:scale-105 transition-all duration-500 text-[10px] uppercase tracking-[0.3em] text-center gold-shadow"
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
