
import { MenuCategory } from '../types';

/**
 * PANDUAN BATACHI DATA:
 * 
 * 1. MENU:
 *    - id: ID unik (bebas, misal "m1", "m2", dst)
 *    - name: Nama hidangan
 *    - description: Penjelasan singkat hidangan
 *    - price: Harga dalam angka (tanpa titik/koma)
 *    - category: Gunakan MenuCategory.FOOD, MenuCategory.DRINK, atau MenuCategory.PROMO
 *    - image: URL foto (disarankan resolusi 800x600 atau lebih)
 * 
 * 2. GALLERY:
 *    - id: ID unik (misal "g1", "g2", dst)
 *    - url: URL foto suasana/placing
 *    - caption: Teks yang muncul saat foto diklik
 */

export const menuData = {
  "menu": [
    {
      "id": "1",
      "name": "Nasi Goreng Batachi Signature",
      "description": "Nasi goreng premium dengan kombinasi saffron, potongan wagyu beef, dan telur mata sapi organik.",
      "price": 95000,
      "category": MenuCategory.FOOD,
      "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "2",
      "name": "Batachi Truffle Chicken",
      "description": "Ayam krispi premium yang disajikan dengan sambal pilihan dan siraman saus truffle putih.",
      "price": 75000,
      "category": MenuCategory.FOOD,
      "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "3",
      "name": "Batachi Prime Rib-Eye",
      "description": "Potongan steak premium dengan kematangan sempurna, disajikan dengan pure kentang lembut dan asparagus.",
      "price": 275000,
      "category": MenuCategory.FOOD,
      "image": "https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "4",
      "name": "Batachi Gold Latte",
      "description": "Kopi latte arabika pilihan dengan foam lembut dan hiasan edible gold leaf 24 karat.",
      "price": 65000,
      "category": MenuCategory.DRINK,
      "image": "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "5",
      "name": "Batachi Royal Lychee Tea",
      "description": "Teh premium dengan aroma bunga melati, buah leci segar, dan sentuhan madu hutan.",
      "price": 38000,
      "category": MenuCategory.DRINK,
      "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "6",
      "name": "Batachi Royal Set for 2",
      "description": "Paket spesial untuk 2 orang: 2 Signature Rice, 1 Truffle Chicken, dan 2 Royal Tea.",
      "price": 245000,
      "category": MenuCategory.PROMO,
      "image": "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "7",
      "name": "Wagyu Beef Sando",
      "description": "Sandwich mewah gaya Jepang dengan daging wagyu A5 yang sangat lembut dan saus tonkatsu.",
      "price": 185000,
      "category": MenuCategory.FOOD,
      "image": "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=800&q=80"
    }
  ],
  "gallery": [
    { 
      "id": "g1", 
      "url": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80", 
      "caption": "Suasana Makan Malam Romantis di Main Hall" 
    },
    { 
      "id": "g2", 
      "url": "https://images.unsplash.com/photo-1550966842-28c2e27ad66f?auto=format&fit=crop&w=800&q=80", 
      "caption": "Koleksi Minuman Wine & Mocktail Premium Kami" 
    },
    { 
      "id": "g3", 
      "url": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80", 
      "caption": "Proses Pembuatan Hidangan oleh Chef Batachi" 
    },
    { 
      "id": "g4", 
      "url": "https://images.unsplash.com/photo-1551632432-c735e97994ce?auto=format&fit=crop&w=800&q=80", 
      "caption": "Area VIP Lounge untuk Pertemuan Bisnis" 
    }
  ]
};
