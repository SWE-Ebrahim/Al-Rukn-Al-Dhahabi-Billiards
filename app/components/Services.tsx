'use client';

import { useLanguage } from '../context/LanguageContext';
import { Gamepad2 } from 'lucide-react';
import { FaTableTennis } from 'react-icons/fa';
import { RiBilliardsFill } from 'react-icons/ri';
import { GiPoolTriangle } from 'react-icons/gi';
import { motion } from 'framer-motion';

const images = {
  billiards: 'https://images.unsplash.com/photo-1666193183128-6ec58995f672?q=80&w=1374&auto=format&fit=crop',
  snooker: 'https://images.pexels.com/photos/18828557/pexels-photo-18828557.jpeg',
  playstation: 'https://images.unsplash.com/photo-1654557339705-d4250e03ea80?w=600&auto=format&fit=crop',
  tennis: 'https://plus.unsplash.com/premium_photo-1667935668845-889e8a3df0ff?w=600&auto=format&fit=crop',
};

export default function Services() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    {
      id: 'billiards',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
      border: 'border-[#d4af37]/50 hover:border-emerald-500/60',
      icon: <RiBilliardsFill className="w-10 h-10 text-[#d4af37] mb-4 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />,
      title_en: 'BILLIARDS',
      title_ar: 'بلياردو',
      desc_en: 'Professional full-size tables for all levels.',
      desc_ar: 'طاولات احترافية بالحجم الكامل لجميع المستويات.',
      image: images.billiards,
      overlay: 'from-emerald-900/80 to-black/90',
    },
    {
      id: 'snooker',
      glow: 'shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
      border: 'border-[#d4af37]/50 hover:border-cyan-500/60',
      icon: <GiPoolTriangle className="w-10 h-10 text-[#d4af37] mb-4 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />,
      title_en: 'SNOOKER',
      title_ar: 'سنوكر',
      desc_en: 'Premium environment with tournament size tables.',
      desc_ar: 'بيئة فاخرة مع طاولات بحجم البطولات.',
      image: images.snooker,
      overlay: 'from-cyan-900/80 to-black/90',
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
      image: images.playstation,
      overlay: 'from-blue-900/80 to-black/90',
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
      image: images.tennis,
      overlay: 'from-amber-900/80 to-black/90',
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center py-16 lg:py-24 bg-[#0d1117] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <motion.div 
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <motion.div 
          className={`text-center flex flex-col items-center mb-16 ${isRTL ? 'font-arabic' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
            {isRTL ? 'الخدمات' : 'Services'}
          </p>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d4af37] leading-tight pb-3"
            style={{ filter: 'drop-shadow(0px 4px 6px rgba(212, 175, 55, 0.4))' }}
          >
            {isRTL ? 'خدماتنا' : 'OUR SERVICES'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`relative h-72 rounded-2xl overflow-hidden transition-all duration-500 transform group border ${service.border} ${service.glow}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-b ${service.overlay}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide drop-shadow-lg">
                  {isRTL ? service.title_ar : service.title_en}
                </h3>
                <p className="text-gray-200 font-sans text-sm leading-relaxed drop-shadow-md">
                  {isRTL ? service.desc_ar : service.desc_en}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}