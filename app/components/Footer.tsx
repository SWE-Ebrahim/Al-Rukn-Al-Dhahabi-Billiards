'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { FaTiktok, FaInstagram, FaYoutube, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const footerLinks = [
    { name_en: 'Home', name_ar: 'الرئيسية', href: '#hero' },
    { name_en: 'Experience', name_ar: 'نظرة عامة', href: '#about' },
    { name_en: 'Services', name_ar: 'الخدمات', href: '#services' },
    { name_en: 'Gallery', name_ar: 'مرافقنا', href: '#gallery' },
    { name_en: 'Contact', name_ar: 'التواصل', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0d1117] text-white py-10 border-t border-[#d4af37]/30 relative z-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-[#d4af37] text-xl md:text-2xl font-black tracking-widest text-center drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105 whitespace-pre-line">
              {isRTL ? 'الركن الذهبي' : 'AL RUKN\nAL DHAHABI'}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href="#"
                onClick={(e) => { e.preventDefault(); scrollTo(link.href.replace('#', '')); }}
                className="text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 text-xs md:text-sm font-semibold tracking-widest uppercase"
              >
                {isRTL ? link.name_ar : link.name_en}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/alrukn.aldhahabi/" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#161b22] border border-white/10 rounded-full text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
               <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.tiktok.com/@alrukn.aldhahabi" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#161b22] border border-white/10 rounded-full text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
               <FaTiktok className="w-4 h-4" />
            </a>
            <a href="https://wa.me/971542002332" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#161b22] border border-white/10 rounded-full text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
               <FaWhatsapp className="w-4 h-4" />
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=25.392703,55.439188" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#161b22] border border-white/10 rounded-full text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
               <FaMapMarkerAlt className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center flex flex-col items-center gap-2">
           <p className="text-gray-500 font-sans text-[11px] sm:text-xs tracking-widest uppercase font-medium leading-relaxed">
             {isRTL 
               ? `© ${currentYear} الركن الذهبي للبليارد. جميع الحقوق محفوظة.` 
               : `Copyright © ${currentYear} Al Rukn Al Dhahabi. All rights reserved.`}
             <br />
             {isRTL ? 'تصميم وتطوير' : 'Powered by'}{' '}
             <a href="https://ebrahimalmahbosh.com" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white hover:scale-105 transition-all duration-300 inline-block">EtechStudio</a>
           </p>
        </div>
      </div>
    </footer>
  );
}