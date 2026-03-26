export type Language = 'en' | 'ar';

export interface Translations {
  // Navbar
  nav_home: string;
  nav_about: string;
  nav_services: string;
  nav_gallery: string;
  nav_contact: string;
  nav_whatsapp: string;

  // Hero
  hero_title: string;
  hero_tagline: string;
  hero_cta_wa: string;
  hero_cta_maps: string;

  // About
  about_badge: string;
  about_title: string;
  about_body1: string;
  about_body2: string;
  about_body3: string;
  about_stat_tables: string;
  about_stat_sports: string;
  about_stat_location: string;

  // Services
  services_badge: string;
  services_title: string;
  services_desc: string;

  // Service Cards
  service_billiards_title: string;
  service_billiards_desc: string;
  service_snooker_title: string;
  service_snooker_desc: string;
  service_playstation_title: string;
  service_playstation_desc: string;
  service_tennis_title: string;
  service_tennis_desc: string;
  service_pingpong_title: string;
  service_pingpong_desc: string;

  // Gallery
  gallery_badge: string;
  gallery_title: string;

  // Contact
  contact_badge: string;
  contact_title: string;
  contact_address: string;
  contact_wa_title: string;
  contact_wa_cta: string;
  contact_maps_cta: string;
  contact_follow_us: string;
  contact_phone: string;
  contact_location: string;

  // Footer
  footer_tagline: string;
  footer_copyright: string;
  footer_powered: string;
  footer_brand: string;
  footer_subtitle: string;

  // Common
  switch_lang: string;
}