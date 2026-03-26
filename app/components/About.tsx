'use client';

import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, translations } = useLanguage();
  const isRTL = language === 'ar';

  const cloudinaryUrl = (publicId: string) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,c_fill,w_800,h_600/${publicId}`;
  };

  return (
    <section
      id="about"
      className="min-h-screen py-12 lg:py-20 bg-[var(--color-bg-alt)] flex items-center"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <div className={`${isRTL ? 'font-arabic order-2 lg:order-1' : 'order-1'}`}>
            <span className="inline-block px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-[var(--color-gold-primary)]/10 text-[var(--color-gold-dark)] text-xs lg:text-sm font-semibold tracking-widest uppercase mb-3 lg:mb-4 border border-[var(--color-gold-primary)]/20">
              {translations.about_badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-3 lg:mb-4 leading-tight">
              {translations.about_title}
            </h2>
            <div className="gold-divider w-16 lg:w-20 mb-6 lg:mb-8" />
            
            <div className="space-y-3 lg:space-y-4 text-[var(--color-text-secondary)] text-sm lg:text-base leading-relaxed">
              <p>{translations.about_body1}</p>
              <p>{translations.about_body2}</p>
              <p>{translations.about_body3}</p>
            </div>

            {/* Stat Cards - Better responsive layout */}
            <div className="grid grid-cols-3 gap-3 lg:gap-4 mt-6 lg:mt-10">
              {[
                { value: '10+', label: translations.about_stat_tables },
                { value: '5', label: translations.about_stat_sports },
                { value: '1', label: translations.about_stat_location },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="card p-3 lg:p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-2xl lg:text-4xl font-black text-gold-gradient mb-1 lg:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-[var(--color-text-muted)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Enhanced styling */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50">
              <img
                src={cloudinaryUrl('image4')}
                alt="Al Rukn Al Dhahabi venue interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements - Enhanced */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[var(--color-gold-primary)]/30 to-[var(--color-gold-light)]/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-tl from-[var(--color-gold-light)]/30 to-transparent rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}