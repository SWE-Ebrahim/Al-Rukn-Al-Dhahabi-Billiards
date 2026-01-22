import { Language, Translations } from '@/types/i18n';

export function getTranslations(lang: Language): Translations {
  const translations = {
    en: {
      logo: 'Al Rukn Al Dhahabi',
      subtitle: 'Billiards',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      heroTitle: 'Al Rukn Al Dhahabi',
      location: 'Grand Mall, Al Rashidiya 3, Ajman',
      heroDescription: 'Your premier destination for billiards, PlayStation gaming, and entertainment in Ajman',
      contactUs: 'Call Now',
      viewServices: 'Our Services',
      // Add gallery translations
      galleryTitle: 'Gallery',
      gallerySubtitle: 'Take a look at our facilities and fun moments',
      galleryClose: 'Close',
      galleryPrevious: 'Previous',
      galleryNext: 'Next',
      switchToArabic: 'العربية',
      switchToEnglish: 'English',
    },
    ar: {
      logo: 'الركن الذهبي',
      subtitle: 'للبلياردو',
      about: 'من نحن',
      services: 'الخدمات',
      contact: 'اتصل بنا',
      heroTitle: 'الركن الذهبي',
      location: 'جراند مول، الراشدية ٣، عجمان',
      heroDescription: 'وجهتك المثالية للبلياردو وألعاب البلايستيشن والترفيه في عجمان',
      contactUs: 'اتصل بنا',
      viewServices: 'خدماتنا',
      // Add gallery translations
      galleryTitle: 'معرض الصور',
      gallerySubtitle: 'ألق نظرة على مرافقنا واللحظات الممتعة',
      galleryClose: 'إغلاق',
      galleryPrevious: 'السابق',
      galleryNext: 'التالي',
      switchToArabic: 'العربية',
      switchToEnglish: 'English',
    }
  };
  
  return translations[lang];
}