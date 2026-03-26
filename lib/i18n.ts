import type { Language, Translations } from '@/types/i18n';

const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_gallery: 'Gallery',
    nav_contact: 'Contact',
    nav_whatsapp: 'WhatsApp Us',

    // Hero
    hero_title: 'Al Rukn Al Dhahabi',
    hero_tagline: 'Premium billiards, snooker, PlayStation & more — Grand Mall, Ajman',
    hero_cta_wa: 'WhatsApp Us',
    hero_cta_maps: 'Get Directions',

    // About
    about_badge: 'OUR STORY',
    about_title: 'Where Every Game Becomes an Experience',
    about_body1: 'Al Rukn Al Dhahabi is Ajman\'s premier entertainment destination, offering world-class billiards and snooker tables in a refined, welcoming atmosphere.',
    about_body2: 'Whether you\'re a competitive player or just looking for a great time with friends and family, our venue is designed for everyone — from beginners to champions.',
    about_body3: 'Find us inside Grand Mall, Al Rashidiya 3, Ajman — where luxury meets sport.',
    about_stat_tables: 'Billiard Tables',
    about_stat_sports: 'Sports & Games',
    about_stat_location: 'Grand Mall Ajman',

    // Services
    services_badge: 'WHAT WE OFFER',
    services_title: 'Our Services',
    services_desc: 'Five premium experiences under one roof. No bookings needed — walk in and play.',

    // Service Cards
    service_billiards_title: 'Billiards',
    service_billiards_desc: 'Professional full-size billiard tables for players of all levels.',
    service_snooker_title: 'Snooker',
    service_snooker_desc: 'Full-size snooker tables in a premium, focused environment.',
    service_playstation_title: 'PlayStation',
    service_playstation_desc: 'Latest PlayStation consoles with a wide selection of games.',
    service_tennis_title: 'Table Tennis',
    service_tennis_desc: 'Olympic-standard table tennis tables for serious play.',
    service_pingpong_title: 'Ping Pong',
    service_pingpong_desc: 'Casual ping pong for friends and families — fun for all.',

    // Gallery
    gallery_badge: 'TAKE A LOOK',
    gallery_title: 'Our Venue',

    // Contact
    contact_badge: 'FIND US',
    contact_title: 'Get in Touch',
    contact_address: 'Grand Mall, Al Rashidiya 3, Ajman, UAE',
    contact_wa_title: 'Chat with us on WhatsApp',
    contact_wa_cta: 'Open WhatsApp',
    contact_maps_cta: 'Get Directions',
    contact_follow_us: 'Follow Us',
    contact_phone: '+971 54 200 2332',
    contact_location: 'Grand Mall Ajman',

    // Footer
    footer_tagline: 'Premium billiards & entertainment in Ajman',
    footer_copyright: '© 2025 Al Rukn Al Dhahabi. All rights reserved.',
    footer_powered: 'Powered by',
    footer_brand: 'Al Rukn Al Dhahabi',
    footer_subtitle: 'Premium Billiards',

    // Common
    switch_lang: 'العربية',
  },

  ar: {
    // Navbar
    nav_home: 'الرئيسية',
    nav_about: 'عن المكان',
    nav_services: 'الخدمات',
    nav_gallery: 'المعرض',
    nav_contact: 'تواصل معنا',
    nav_whatsapp: 'واتساب',

    // Hero
    hero_title: 'الركن الذهبي',
    hero_tagline: 'بلياردو وسنوكر وبلايستيشن وأكثر — جراند مول، عجمان',
    hero_cta_wa: 'تواصل عبر واتساب',
    hero_cta_maps: 'احصل على الاتجاهات',

    // About
    about_badge: 'قصتنا',
    about_title: 'حيث تصبح كل لعبة تجربة لا تُنسى',
    about_body1: 'الركن الذهبي هو وجهة الترفيه الأولى في عجمان، يقدم طاولات بلياردو وسنوكر عالمية المستوى في أجواء راقية وترحيبية.',
    about_body2: 'سواء كنت لاعبًا محترفًا أو تبحث عن وقت ممتع مع الأصدقاء والعائلة، مكاننا مصمم للجميع — من المبتدئين إلى الأبطال.',
    about_body3: 'تجدنا داخل جراند مول، الراشدية 3، عجمان — حيث تلتقي الفخامة بالرياضة.',
    about_stat_tables: 'طاولات بلياردو',
    about_stat_sports: 'رياضات وألعاب',
    about_stat_location: 'جراند مول عجمان',

    // Services
    services_badge: 'ما نقدمه',
    services_title: 'خدماتنا',
    services_desc: 'خمس تجارب متميزة تحت سقف واحد. لا حجز مسبق — تفضل مباشرة والعب.',

    // Service Cards
    service_billiards_title: 'بلياردو',
    service_billiards_desc: 'طاولات بلياردو احترافية بحجمها الكامل لجميع المستويات.',
    service_snooker_title: 'سنوكر',
    service_snooker_desc: 'طاولات سنوكر بحجمها الكامل في بيئة احترافية ومريحة.',
    service_playstation_title: 'بلايستيشن',
    service_playstation_desc: 'أحدث أجهزة بلايستيشن مع مجموعة واسعة من الألعاب.',
    service_tennis_title: 'تنس الطاولة',
    service_tennis_desc: 'طاولات تنس طاولة بمعايير أولمبية للعب الجاد.',
    service_pingpong_title: 'بينج بونج',
    service_pingpong_desc: 'بينج بونج ترفيهي للأصدقاء والعائلات — متعة للجميع.',

    // Gallery
    gallery_badge: 'ألقِ نظرة',
    gallery_title: 'مكاننا',

    // Contact
    contact_badge: 'أين نحن',
    contact_title: 'تواصل معنا',
    contact_address: 'جراند مول، الراشدية 3، عجمان، الإمارات',
    contact_wa_title: 'تواصل معنا عبر واتساب',
    contact_wa_cta: 'فتح واتساب',
    contact_maps_cta: 'احصل على الاتجاهات',
    contact_follow_us: 'تابعنا',
    contact_phone: '+971 54 200 2332',
    contact_location: 'جراند مول عجمان',

    // Footer
    footer_tagline: 'بلياردو وترفيه متميز في عجمان',
    footer_copyright: '© 2025 الركن الذهبي. جميع الحقوق محفوظة.',
    footer_powered: 'مدعوم من',
    footer_brand: 'الركن الذهبي',
    footer_subtitle: 'بلياردو متميز',

    // Common
    switch_lang: 'English',
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}