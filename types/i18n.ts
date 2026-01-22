export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface Translations {
  // Header
  logo: string;
  subtitle: string;
  about: string;
  services: string;
  contact: string;
  
  // Hero
  heroTitle: string;
  heroDescription: string;
  location: string;
  contactUs: string;
  viewServices: string;
  
  // Gallery
  galleryTitle: string;
  gallerySubtitle: string;
  galleryClose: string;
  galleryPrevious: string;
  galleryNext: string;
  
  // Language Toggle
  switchToArabic?: string;
  switchToEnglish?: string;
}