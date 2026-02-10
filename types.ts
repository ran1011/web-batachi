
export enum MenuCategory {
  FOOD = 'Makanan',
  DRINK = 'Minuman',
  PROMO = 'Promo'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}

export interface BannerConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export interface SiteSettings {
  logoUrl: string;
  restaurantName: string;
  whatsappNumber: string;
}
