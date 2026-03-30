'use client';

import { useLanguage } from '../context/LanguageContext';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Nufail Nasar',
    stars: 5,
    time_en: '2 months ago',
    time_ar: 'منذ شهرين',
    text_en: 'Very nice place and very helpful staffs.',
    text_ar: 'مكان جميل جداً والموظفون متعاونون جداً.',
    avatar: 'N',
  },
  {
    name: 'خالد Games XD',
    stars: 5,
    time_en: 'a month ago',
    time_ar: 'منذ شهر',
    text_en:
      'A fun place for young people. It has PlayStation, billiards, and ping pong, and offers services and internet. The people are respectful, honestly.',
    text_ar:
      'مكان ممتع للشباب. فيه بلايستيشن وبلياردو وبينغ بونغ، ويوفر خدمات وإنترنت. الناس محترمون، بصراحة.',
    avatar: 'خ',
  },
  {
    name: 'Zeyad Alshobali',
    stars: 5,
    time_en: 'a month ago',
    time_ar: 'منذ شهر',
    text_en:
      'The best arcade in Ajman. Variety of games, reasonable prices, and excellent staff.',
    text_ar: 'أفضل مكان ترفيهي في عجمان. تنوع في الألعاب وأسعار معقولة وكادر رائع.',
    avatar: 'Z',
  },
];

export default function Reviews() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section
      id="reviews"
      className="py-16 lg:py-24 bg-[#0d1117] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className={`text-center mb-10 md:mb-14 ${isRTL ? 'font-arabic' : ''}`}>
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-2 border-b border-[#d4af37]/30 pb-2 inline-block">
            {isRTL ? 'آراء العملاء' : 'WHAT PEOPLE SAY'}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#d4af37] leading-tight pt-2"
            style={{ filter: 'drop-shadow(0px 4px 6px rgba(212, 175, 55, 0.35))' }}
          >
            {isRTL ? 'التقييمات' : 'Reviews'}
          </h2>
          {/* Google Maps badge */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            <span className="text-gray-400 text-sm font-medium">5.0 · Google Maps</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between bg-[#161b22] border border-white/10 hover:border-[#d4af37]/40 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all duration-400 transform hover:-translate-y-1"
            >
              {/* Avatar + Name */}
              <div className={`flex items-center gap-4 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-[#d4af37] to-[#aa8925] text-black font-extrabold text-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] shrink-0 select-none">
                  {review.avatar}
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-white font-bold text-[15px] leading-tight">{review.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{isRTL ? review.time_ar : review.time_en}</p>
                </div>
              </div>

              {/* Stars */}
              <div className={`flex gap-1 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37] drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]" />
                ))}
              </div>

              {/* Review text */}
              <p className={`text-gray-300 font-sans text-sm sm:text-[15px] leading-relaxed flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? review.text_ar : review.text_en}
              </p>

              {/* Google badge footer */}
              <div className={`mt-6 pt-4 border-t border-white/5 flex items-center gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {/* Google color-dot logo substitute */}
                <div className="flex gap-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                </div>
                <span className="text-gray-600 text-[11px] font-semibold tracking-wider uppercase">Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
