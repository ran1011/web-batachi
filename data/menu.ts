
import { MenuCategory, BannerConfig, SiteSettings } from '../types';

export const initialBanner: BannerConfig = {
  title: "Luxury",
  subtitle: "Refined.",
  backgroundImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80"
};

export const initialSettings: SiteSettings = {
  logoUrl: "", // Kosongkan untuk menggunakan logo teks default
  restaurantName: "BATACHI",
  whatsappNumber: "628123456789"
};

export const menuData = {
  "menu": [
    {
      "id": "1",
      "name": "Nasi Goreng Batachi Signature",
      "description": "Nasi goreng premium dengan kombinasi saffron, potongan wagyu beef, dan telur mata sapi organik.",
      "price": 250,
      "category": MenuCategory.FOOD,
      "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "2",
      "name": "Batachi Truffle Chicken",
      "description": "Ayam krispi premium yang disajikan dengan sambal pilihan dan siraman saus truffle putih.",
      "price": 180,
      "category": MenuCategory.FOOD,
      "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "3",
      "name": "Batachi Prime Rib-Eye",
      "description": "Potongan steak premium dengan kematangan sempurna, disajikan dengan pure kentang lembut dan asparagus.",
      "price": 850,
      "category": MenuCategory.FOOD,
      "image": "https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "4",
      "name": "Batachi Gold Latte",
      "description": "Kopi latte arabika pilihan dengan foam lembut dan hiasan edible gold leaf 24 karat.",
      "price": 145,
      "category": MenuCategory.DRINK,
      "image": "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": "5",
      "name": "Batachi Royal Lychee Tea",
      "description": "Teh premium dengan aroma bunga melati, buah leci segar, dan sentuhan madu hutan.",
      "price": 95,
      "category": MenuCategory.DRINK,
      "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
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
    }
  ]
};
