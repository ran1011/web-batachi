
import React, { useState, useEffect } from 'react';
import { MenuCategory, MenuItem, GalleryItem } from '../types';
import { menuData as initialData } from '../data/menu';

const Admin: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [activeTab, setActiveTab] = useState<'menu' | 'gallery'>('menu');
  
  // Form State
  const [newMenu, setNewMenu] = useState<Partial<MenuItem>>({ category: MenuCategory.FOOD });
  const [newGallery, setNewGallery] = useState<Partial<GalleryItem>>({});

  useEffect(() => {
    const savedMenu = localStorage.getItem('batachi_menu');
    const savedGallery = localStorage.getItem('batachi_gallery');
    
    if (savedMenu) setMenu(JSON.parse(savedMenu));
    else setMenu(initialData.menu as MenuItem[]);

    if (savedGallery) setGallery(JSON.parse(savedGallery));
    else setGallery(initialData.gallery as GalleryItem[]);
  }, []);

  const saveToLocal = (m: MenuItem[], g: GalleryItem[]) => {
    localStorage.setItem('batachi_menu', JSON.stringify(m));
    localStorage.setItem('batachi_gallery', JSON.stringify(g));
    setMenu(m);
    setGallery(g);
  };

  const handleAddMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMenu.name || !newMenu.price || !newMenu.image) return alert("Lengkapi data menu!");
    const item: MenuItem = {
      id: Date.now().toString(),
      name: newMenu.name!,
      description: newMenu.description || "",
      price: Number(newMenu.price),
      category: (newMenu.category as MenuCategory) || MenuCategory.FOOD,
      image: newMenu.image!
    };
    const updated = [...menu, item];
    saveToLocal(updated, gallery);
    setNewMenu({ category: MenuCategory.FOOD });
  };

  const handleDeleteMenu = (id: string) => {
    if (confirm("Hapus menu ini?")) {
      const updated = menu.filter(m => m.id !== id);
      saveToLocal(updated, gallery);
    }
  };

  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGallery.url) return alert("URL Foto wajib ada!");
    const item: GalleryItem = {
      id: Date.now().toString(),
      url: newGallery.url!,
      caption: newGallery.caption || "Batachi Moment"
    };
    const updated = [...gallery, item];
    saveToLocal(menu, updated);
    setNewGallery({});
  };

  const handleDeleteGallery = (id: string) => {
    if (confirm("Hapus foto ini?")) {
      const updated = gallery.filter(g => g.id !== id);
      saveToLocal(menu, updated);
    }
  };

  return (
    <div className="min-h-screen pt-40 px-6 pb-20 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Dashboard Internal</span>
          <h2 className="text-5xl font-serif text-white">Atur Postingan.</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('menu')}
            className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'menu' ? 'bg-gold text-black' : 'border border-gold/30 text-gold hover:bg-gold/10'}`}
          >
            Kelola Menu
          </button>
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'gallery' ? 'bg-gold text-black' : 'border border-gold/30 text-gold hover:bg-gold/10'}`}
          >
            Kelola Galeri
          </button>
        </div>
      </div>

      {activeTab === 'menu' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Tambah Menu */}
          <div className="lg:col-span-1">
            <form onSubmit={handleAddMenu} className="admin-card p-8 rounded-[30px] sticky top-32 space-y-6">
              <h4 className="text-gold uppercase text-[10px] tracking-[0.3em] font-bold mb-6">Menu Baru</h4>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-gold outline-none transition-all" 
                placeholder="Nama Hidangan"
                value={newMenu.name || ''}
                onChange={e => setNewMenu({...newMenu, name: e.target.value})}
              />
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-gold outline-none text-gray-400"
                value={newMenu.category}
                onChange={e => setNewMenu({...newMenu, category: e.target.value as MenuCategory})}
              >
                <option value={MenuCategory.FOOD}>Makanan</option>
                <option value={MenuCategory.DRINK}>Minuman</option>
                <option value={MenuCategory.PROMO}>Promo</option>
              </select>
              <input 
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-gold outline-none" 
                placeholder="Harga (Rp)"
                value={newMenu.price || ''}
                onChange={e => setNewMenu({...newMenu, price: e.target.value})}
              />
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-gold outline-none" 
                placeholder="URL Gambar (Unsplash/Link)"
                value={newMenu.image || ''}
                onChange={e => setNewMenu({...newMenu, image: e.target.value})}
              />
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-gold outline-none h-32" 
                placeholder="Deskripsi Singkat"
                value={newMenu.description || ''}
                onChange={e => setNewMenu({...newMenu, description: e.target.value})}
              />
              <button type="submit" className="w-full py-5 bg-gold text-black rounded-xl font-bold uppercase text-[10px] tracking-widest hover:scale-[1.02] transition-all">
                Posting Menu
              </button>
            </form>
          </div>

          {/* List Menu */}
          <div className="lg:col-span-2 space-y-6">
            {menu.map(item => (
              <div key={item.id} className="admin-card p-6 rounded-3xl flex items-center gap-6 group">
                <img src={item.image} className="w-24 h-24 rounded-2xl object-cover border border-white/10" alt="" />
                <div className="flex-1">
                  <span className="text-gold text-[8px] uppercase tracking-widest font-bold">{item.category}</span>
                  <h5 className="text-lg font-serif">{item.name}</h5>
                  <p className="text-white/40 text-xs mt-1">Rp {item.price.toLocaleString('id-ID')}</p>
                </div>
                <button 
                  onClick={() => handleDeleteMenu(item.id)}
                  className="px-6 py-3 border border-red-500/30 text-red-500 text-[9px] uppercase font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <form onSubmit={handleAddGallery} className="admin-card p-8 rounded-[30px] sticky top-32 space-y-6">
              <h4 className="text-gold uppercase text-[10px] tracking-[0.3em] font-bold mb-6">Foto Galeri Baru</h4>
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-gold outline-none" 
                placeholder="URL Foto"
                value={newGallery.url || ''}
                onChange={e => setNewGallery({...newGallery, url: e.target.value})}
              />
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-gold outline-none" 
                placeholder="Keterangan (Caption)"
                value={newGallery.caption || ''}
                onChange={e => setNewGallery({...newGallery, caption: e.target.value})}
              />
              <button type="submit" className="w-full py-5 bg-gold text-black rounded-xl font-bold uppercase text-[10px] tracking-widest hover:scale-[1.02] transition-all">
                Simpan ke Galeri
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
             {gallery.map(item => (
                <div key={item.id} className="admin-card rounded-3xl overflow-hidden relative group">
                  <img src={item.url} className="w-full aspect-video object-cover" alt="" />
                  <div className="p-4 flex justify-between items-center">
                    <p className="text-[9px] uppercase tracking-widest text-white/50 truncate max-w-[150px]">{item.caption}</p>
                    <button 
                      onClick={() => handleDeleteGallery(item.id)}
                      className="text-red-500 text-[10px] hover:underline"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
             ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
