'use client';

import { useLanguage } from '../context/LanguageContext';
import { Target, CircleDot, Gamepad2 } from 'lucide-react';
import { FaTableTennis } from 'react-icons/fa';

export default function Services() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    {
      id: 'billiards',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
      border: 'border-[#d4af37]/50 hover:border-emerald-500/60',
      icon: <Target className="w-10 h-10 text-[#d4af37] mb-4 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />,
      title_en: 'BILLIARDS',
      title_ar: 'بلياردو',
      desc_en: 'Professional full-size tables for all levels.',
      desc_ar: 'طاولات احترافية بالحجم الكامل لجميع المستويات.',
    },
    {
      id: 'snooker',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
      border: 'border-[#d4af37]/50 hover:border-cyan-500/60',
      icon: <CircleDot className="w-10 h-10 text-[#d4af37] mb-4 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />,
      title_en: 'SNOOKER',
      title_ar: 'سنوكر',
      desc_en: 'Premium environment with tournament size tables.',
      desc_ar: 'بيئة فاخرة مع طاولات بحجم البطولات.',
    },
    {
      id: 'playstation',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]',
      border: 'border-[#d4af37]/50 hover:border-blue-500/60',
      icon: <Gamepad2 className="w-10 h-10 text-[#d4af37] mb-4 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />,
      title_en: 'PLAYSTATION',
      title_ar: 'بلايستيشن',
      desc_en: 'Latest consoles & diverse game selection.',
      desc_ar: 'أحدث أجهزة الألعاب وتشكيلة متنوعة من الألعاب.',
    },
    {
      id: 'tennis',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
      border: 'border-[#d4af37]/50 hover:border-emerald-500/60',
      icon: <FaTableTennis className="w-10 h-10 text-[#d4af37] mb-4 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />,
      title_en: 'TABLE TENNIS',
      title_ar: 'تنس الطاولة',
      desc_en: 'Olympic standard tables for serious play.',
      desc_ar: 'طاولات بمواصفات أولمبية للعب الجاد.',
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-16 lg:py-24 bg-[#0d1117] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className={`text-center flex flex-col items-center mb-16 ${isRTL ? 'font-arabic' : ''}`}>
          <p className="text-gray-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
            {isRTL ? 'الخدمات' : 'Services'}
          </p>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d4af37] leading-tight pb-3"
            style={{ filter: 'drop-shadow(0px 4px 6px rgba(212, 175, 55, 0.4))' }}
          >
            {isRTL ? 'خدماتنا' : 'OUR SERVICES'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-[#161b22] border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-500 transform hover:-translate-y-2 group ${service.border} ${service.glow}`}
            >
              <div className="transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                {isRTL ? service.title_ar : service.title_en}
              </h3>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                {isRTL ? service.desc_ar : service.desc_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}