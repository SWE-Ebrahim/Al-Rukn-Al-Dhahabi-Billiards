'use client';

import { useLanguage } from '../context/LanguageContext';
import { Target, Gamepad2, Building2 } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const cloudinaryUrl = (publicId: string) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,c_fill,w_800,h_600/${publicId}`;
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 lg:py-24 bg-[#0d1117] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image Content */}
          <div className={`relative ${isRTL ? 'lg:order-2' : 'lg:order-1'} group mx-auto max-w-lg lg:max-w-none w-full`}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-500 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-[#161b22]">
              <img
                src={cloudinaryUrl('image1')} 
                alt="Experience at Al Rukn Al Dhahabi"
                className="w-full h-full object-cover aspect-4/3 md:aspect-5/4 transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d1117]/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`${isRTL ? 'font-arabic lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
            <p className="text-gray-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
              {isRTL ? 'تجربة' : 'Experience'}
            </p>
            
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-[#fce28b] via-[#d4af37] to-[#aa8925] mb-6 leading-tight pb-3"
              style={{ filter: 'drop-shadow(0px 4px 6px rgba(212, 175, 55, 0.3))' }}
            >
              {isRTL ? (
                <>حيث تلتقي الفخامة<br/>بالرياضة</>
              ) : (
                <>WHERE LUXURY<br/>MEETS SPORT</>
              )}
            </h2>
            
            <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed mb-10 md:pr-4">
              {isRTL 
                ? 'بيئتنا الراقية والموقع المتميز لصالة البلياردو والألعاب الترفيهية الفاخرة مصممة خصيصاً لتوفير تجربة استثنائية تناسب جميع المناسبات في عجمان.'
                : 'Our high-end environment and unmatched locale for a premium Billiards & Gaming lounge is engineered for memorable occasions and flawless entertainment.'}
            </p>

            {/* Floating Glassmorphism Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 w-full">
              
              <div className="bg-[#161b22] border border-white/10 rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-3 hover:bg-[#1c222b] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/40 group">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-[#d4af37] group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)] transition-transform duration-300" />
                <div className="flex flex-col items-center text-center">
                  <span className="text-white font-extrabold text-xl md:text-2xl mt-1 tracking-tight">10+</span>
                  <span className="text-gray-400 font-sans text-[10px] md:text-xs mt-1 leading-tight tracking-wider font-medium uppercase">
                    {isRTL ? 'طاولات بلياردو' : 'Billiard Tables'}
                  </span>
                </div>
              </div>

              <div className="bg-[#161b22] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-[#1c222b] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/40 group">
                <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-[#d4af37] group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)] transition-transform duration-300" />
                <div className="flex flex-col items-center text-center">
                  <span className="text-white font-extrabold text-xl md:text-2xl mt-1 tracking-tight">5</span>
                  <span className="text-gray-400 font-sans text-[10px] md:text-xs mt-1 leading-tight tracking-wider font-medium uppercase">
                    {isRTL ? 'الرياضات والألعاب' : 'Sports & Games'}
                  </span>
                </div>
              </div>

              <div className="bg-[#161b22] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-[#1c222b] transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/40 group">
                <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[#d4af37] group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)] transition-transform duration-300" />
                <div className="flex flex-col items-center text-center">
                  <span className="text-white font-extrabold text-xl md:text-2xl mt-1 tracking-tight">1</span>
                  <span className="text-gray-400 font-sans text-[10px] md:text-xs mt-1 leading-tight tracking-wider font-medium uppercase">
                    {isRTL ? 'موقع المركز' : 'Grand Mall Location'}
                  </span>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}