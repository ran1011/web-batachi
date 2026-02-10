
import React, { useState, useEffect } from 'react';
import { MenuItem, SiteSettings } from '../types';
import { menuData as initialMenu, initialSettings } from '../data/menu';

const PreOrder: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    date: '',
    whatsapp: '',
    orderType: 'Antar',
    selectedItem: '',
    note: ''
  });

  useEffect(() => {
    const savedMenu = localStorage.getItem('batachi_menu');
    const savedSettings = localStorage.getItem('batachi_settings');
    if (savedMenu) setItems(JSON.parse(savedMenu));
    else setItems(initialMenu.menu as MenuItem[]);
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo BATACHI! Saya ingin melakukan REQUEST ORDER / PO:%0A%0A` +
      `*Nama:* ${formData.name}%0A` +
      `*Alamat:* ${formData.address}%0A` +
      `*Tanggal:* ${formData.date}%0A` +
      `*No WA:* ${formData.whatsapp}%0A` +
      `*Opsi:* ${formData.orderType}%0A` +
      `*Menu:* ${formData.selectedItem}%0A` +
      `*Catatan:* ${formData.note || '-'}`;
    
    window.open(`https://wa.me/${settings.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-48 px-6 pb-24 max-w-4xl mx-auto">
      <div className="text-center mb-20 animate-luxury">
        <span className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Exclusive Booking</span>
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-serif mb-6 leading-tight">Request Order.</h2>
        <p className="text-white/40 text-sm max-w-md mx-auto font-light leading-relaxed">
          Pesan hidangan premium favorit Anda untuk acara spesial di masa mendatang. Kami akan menghubungi Anda segera.
        </p>
      </div>

      <div className="admin-card p-10 md:p-16 rounded-[50px] border border-white/5 shadow-2xl animate-luxury">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-gold text-[9px] font-bold uppercase tracking-widest">Nama Lengkap</label>
              <input 
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold outline-none transition-all"
                placeholder="Ex: John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <label className="text-gold text-[9px] font-bold uppercase tracking-widest">Nomor WhatsApp</label>
              <input 
                required
                type="tel"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold outline-none transition-all"
                placeholder="Ex: 0812..."
                value={formData.whatsapp}
                onChange={e => setFormData({...formData, whatsapp: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-gold text-[9px] font-bold uppercase tracking-widest">Alamat Lengkap</label>
            <textarea 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold outline-none transition-all h-32"
              placeholder="Masukkan alamat pengiriman lengkap..."
              value={formData.address}
              onChange={e => setFormData({...formData, address: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-gold text-[9px] font-bold uppercase tracking-widest">Tanggal Diambil / Diantar</label>
              <input 
                required
                type="date"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold outline-none transition-all"
                value={formData.date}
                onChange={e => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="space-y-4">
              <label className="text-gold text-[9px] font-bold uppercase tracking-widest">Metode</label>
              <select 
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold outline-none transition-all"
                value={formData.orderType}
                onChange={e => setFormData({...formData, orderType: e.target.value})}
              >
                <option value="Antar">Diantar ke Alamat</option>
                <option value="Ambil">Ambil di Resto</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-gold text-[9px] font-bold uppercase tracking-widest">Pilih Menu (Opsional)</label>
            <select 
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold outline-none transition-all"
              value={formData.selectedItem}
              onChange={e => setFormData({...formData, selectedItem: e.target.value})}
            >
              <option value="">-- Pilih Menu Utama --</option>
              {items.map(item => (
                <option key={item.id} value={item.name}>{item.name} (฿{item.price})</option>
              ))}
              <option value="Custom Request">Request Menu Lainnya</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="text-gold text-[9px] font-bold uppercase tracking-widest">Catatan Tambahan</label>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold outline-none transition-all h-24"
              placeholder="Ex: Alergi kacang, minta pedas, dll..."
              value={formData.note}
              onChange={e => setFormData({...formData, note: e.target.value})}
            />
          </div>

          <button type="submit" className="w-full py-6 bg-gold text-black rounded-full font-bold uppercase text-[11px] tracking-[0.4em] hover:scale-[1.02] transition-all gold-shadow">
            Kirim Permintaan PO
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreOrder;
