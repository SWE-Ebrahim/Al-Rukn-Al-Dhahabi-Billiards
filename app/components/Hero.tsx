'use client';

import { useLanguage } from '../context/LanguageContext';
import { MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const cloudinaryUrl = (publicId: string) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/${publicId}`;
  };

  const whatsappLink = `https://wa.me/971542002332?text=${encodeURIComponent(
    isRTL ? 'مرحباً، أريد الاستفسار عن الخدمات' : 'Hello, I would like to enquire about your services'
  )}`;

  const mapsLink = 'https://www.google.com/maps/place/Al+Rukn+Al+Dhahabi+Billiards+%D8%A7%D9%84%D8%B1%D9%83%D9%86+%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A+%D9%84%D9%84%D8%A8%D9%84%D9%8A%D8%A7%D8%B1%D8%AF%D9%88%E2%80%AD/@25.3949008,55.4360865,15z/data=!4m6!3m5!1s0x3e5f59ac4e59252d:0x1e3392179b1580ff!8m2!3d25.3926971!4d55.4391933!16s%2Fg%2F11x7qxylq7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D';

  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full flex items-center justify-center overflow-hidden bg-[#0d1117]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image with Dark Gradient Overlay to match Mockup */}
      <div className="absolute inset-0 z-0">
        <img
          src={cloudinaryUrl('image2')}
          alt="Al Rukn Al Dhahabi venue"
          className="w-full h-full object-cover object-center origin-center scale-105"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-amber-900/30 via-yellow-800/20 to-[#0a0b0f]"
        />
      </div>

      {/* Decorative Ambient Glows matching the warm theme */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center pt-10">
        <div className={`text-center flex flex-col items-center ${isRTL ? 'font-arabic' : ''}`}>
          
          {/* Main Title Split Colors (White / Gold) */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide mb-3 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-1 sm:gap-3 md:gap-4 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {isRTL ? 'الركن' : 'AL RUKN'}
            </span>
            <span 
              className="text-transparent bg-clip-text bg-linear-to-b from-[#FEF08A] via-[#EAB308] to-[#A16207] pb-5 sm:pb-6"
              style={{ filter: 'drop-shadow(0px 4px 6px rgba(234, 179, 8, 0.4))' }}
            >
              {isRTL ? 'الذهبي' : 'AL DHAHABI'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-100 text-sm md:text-lg lg:text-xl md:tracking-wide font-medium mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            {isRTL ? 'صالة بلياردو وألعاب ترفيهية فاخرة في عجمان' : "Ajman's Premium Billiards & Gaming Lounge"}
          </p>

          {/* Location Badge */}
          <div className="flex items-center gap-2 mb-8 text-yellow-500">
            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-gray-200 text-sm md:text-base font-medium tracking-wide">
              {isRTL ? 'جراند مول، عجمان، الإمارات' : 'Grand Mall, Ajman, UAE'}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full mt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 bg-linear-to-b from-[#FDE047] via-[#EAB308] to-[#CA8A04] hover:from-[#FEF08A] hover:via-[#FACC15] hover:to-[#D97706] text-black font-bold text-base md:text-lg py-3.5 px-8 md:px-10 rounded-lg shadow-[0_5px_20px_rgba(234,179,8,0.4)] shadow-yellow-500/30 border border-yellow-200/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(234,179,8,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
              {isRTL ? 'تواصل معنا' : 'WhatsApp Us'}
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 bg-linear-to-b from-[#FDE047] via-[#EAB308] to-[#CA8A04] hover:from-[#FEF08A] hover:via-[#FACC15] hover:to-[#D97706] text-black font-bold text-base md:text-lg py-3.5 px-8 md:px-10 rounded-lg shadow-[0_5px_20px_rgba(234,179,8,0.4)] shadow-yellow-500/30 border border-yellow-200/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(234,179,8,0.6)]"
            >
              <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              {isRTL ? 'الاتجاهات' : 'Get Directions'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}