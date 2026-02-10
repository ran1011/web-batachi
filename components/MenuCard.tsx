
import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onClick }) => {
  return (
    <div 
      onClick={() => onClick(item)}
      className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 border border-gray-100 hover:border-gold/30"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full border border-gold/20">
          <span className="text-[10px] font-bold text-gold uppercase tracking-tighter">Rp {item.price.toLocaleString('id-ID')}</span>
        </div>
      </div>
      <div className="p-6">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-2">{item.category}</span>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gold transition-colors font-serif mb-2">{item.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 font-light">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
