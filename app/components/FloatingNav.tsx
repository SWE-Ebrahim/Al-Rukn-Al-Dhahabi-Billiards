'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Home, Info, Grid, Image as ImageIcon, Phone, Globe, Menu, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function FloatingNav() {
  const { language, setLanguage } = useLanguage();
  const isRTL = language === 'ar';
  const router = useRouter();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: 'hero', name_en: 'Home', name_ar: 'الرئيسية', icon: <Home /> },
    { id: 'about', name_en: 'Story', name_ar: 'نظرة عامة', icon: <Info /> },
    { id: 'services', name_en: 'Services', name_ar: 'الخدمات', icon: <Grid /> },
    { id: 'gallery', name_en: 'Gallery', name_ar: 'معرض الصور', icon: <ImageIcon /> },
    { id: 'contact', name_en: 'Contact', name_ar: 'تواصل معنا', icon: <Phone /> },
  ];

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Active section tracking with IMPROVED THROTTLE
  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      // Skip if scrolling too fast (performance optimization)
      const delta = Math.abs(window.scrollY - lastScrollY);
      if (delta > 500) {
        lastScrollY = window.scrollY;
        return;
      }
      lastScrollY = window.scrollY;
      
      if (ticking) return;
      
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (let i = navItems.length - 1; i >= 0; i--) {
          const section = document.getElementById(navItems[i].id);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            // Check if current section is in view
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(navItems[i].id);
              break;
            }
          }
        }
        
        ticking = false;
      });
      
      ticking = true;
    };

    // Initial call to set active section on page load
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Language switch
  const toggleLanguage = () => {
    const nextLocale = isRTL ? 'en' : 'ar';
    setLanguage(nextLocale);
    const newPath = pathname?.replace(`/${language}`, `/${nextLocale}`);
    if (newPath) router.push(newPath);
  };

  const handleScrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <div
      style={{ 
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        [isRTL ? 'left' : 'right']: '1rem',
        zIndex: 99999,
        pointerEvents: 'auto'
      }}
    >
      {/* Toggle Button (Mobile + Desktop Closed) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 bg-[#161b22]/90 backdrop-blur-xl border border-[#d4af37]/40 rounded-full text-[#d4af37] shadow-lg transition-transform duration-200 hover:scale-105"
        style={{ zIndex: '100000' }}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Nav Panel */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          isRTL ? 'left-16' : 'right-16'
        }`}
        style={{ zIndex: '100001' }}
      >
        <nav
          className={`flex flex-col bg-[#161b22]/90 backdrop-blur-2xl border border-[#d4af37]/30 rounded-2xl shadow-2xl p-3 gap-2 transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-x-0 pointer-events-auto'
              : `opacity-0 ${
                  isRTL ? '-translate-x-3' : 'translate-x-3'
                } pointer-events-none`
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#d4af37]/25 text-[#d4af37] font-bold scale-105 shadow-lg shadow-[#d4af37]/20'
                  : 'text-gray-400 hover:bg-white/10 hover:text-white font-medium'
              }`}
            >
              <span className="w-5 h-5">{item.icon}</span>

              <span className="text-sm font-semibold whitespace-nowrap">
                {isRTL ? item.name_ar : item.name_en}
              </span>
            </button>
          ))}

          <div className="h-px bg-white/10 my-2"></div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-300 hover:bg-white/10 transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-semibold">
              {isRTL ? 'English' : 'العربية'}
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
