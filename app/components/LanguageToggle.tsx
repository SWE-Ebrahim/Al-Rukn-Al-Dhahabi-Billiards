'use client';

import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // Adjust path as needed

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 text-slate-300 hover:text-white transition-all duration-300 font-medium shadow-lg"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm whitespace-nowrap">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}