'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const { language, translations, setLanguage } = useLanguage();
  const isRTL = language === 'ar';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav_home', id: 'hero' },
    { key: 'nav_about', id: 'about' },
    { key: 'nav_services', id: 'services' },
    { key: 'nav_gallery', id: 'gallery' },
    { key: 'nav_contact', id: 'contact' },
  ] as const;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappLink = `https://wa.me/971542002332?text=${encodeURIComponent(
    isRTL ? 'مرحباً، أريد الاستفسار عن الخدمات' : 'Hello, I would like to enquire about your services'
  )}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-surface)] shadow-lg backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center gap-2 sm:gap-3">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-lg"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="#000000"
                stroke="#C9A84C"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="22" fill="#FFFFFF" />
              <text
                x="50"
                y="50"
                fontSize="28"
                fontWeight="bold"
                fill="#000000"
                textAnchor="middle"
                dominantBaseline="central"
              >
                8
              </text>
              <ellipse
                cx="35"
                cy="35"
                rx="18"
                ry="24"
                fill="url(#shine)"
                opacity="0.4"
              />
              <defs>
                <radialGradient id="shine">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] leading-tight">
                {language === 'ar' ? 'الركن الذهبي' : 'Al Rukn Al Dhahabi'}
              </p>
              <p className="text-xs text-[var(--color-gold-dark)] hidden xs:block">
                {language === 'ar' ? 'بلياردو' : 'Billiards'}
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold-dark)] font-medium transition-colors text-sm lg:text-base bg-transparent border-none cursor-pointer p-0"
              >
                {/* @ts-ignore */}
                {translations[link.key]}
              </button>
            ))}
          </div>

          {/* Right Side: Language + WhatsApp - Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--color-gold-primary)]/10 border border-[var(--color-gold-primary)]/20 text-[var(--color-gold-dark)] hover:bg-[var(--color-gold-primary)]/20 transition-all font-semibold text-sm"
              title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              🌐
              <span className="whitespace-nowrap">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold gap-2 text-sm"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xl:inline">{translations.nav_whatsapp}</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text-primary)] active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--color-surface)] shadow-2xl border-t border-[var(--color-border)] animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-6 space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-gold-primary)]/5 hover:text-[var(--color-gold-dark)] font-medium transition-all bg-transparent border-none cursor-pointer"
              >
                {/* @ts-ignore */}
                {translations[link.key]}
              </button>
            ))}
            
            {/* Action Buttons */}
            <div className="pt-4 mt-4 border-t border-[var(--color-border)] space-y-3">
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'ar' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-lg bg-[var(--color-gold-primary)]/10 text-[var(--color-gold-dark)] font-semibold flex items-center justify-center gap-2 hover:bg-[var(--color-gold-primary)]/20 transition-all"
              >
                🌐
                <span>{language === 'en' ? 'Switch to Arabic' : 'Switch to English'}</span>
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center py-3"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}