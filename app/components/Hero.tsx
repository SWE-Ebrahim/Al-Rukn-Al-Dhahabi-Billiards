'use client';

import { useLanguage } from '../context/LanguageContext';
import { MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  const { language, translations } = useLanguage();
  const isRTL = language === 'ar';

  const cloudinaryUrl = (publicId: string) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/${publicId}`;
  };

  const whatsappLink = `https://wa.me/971542002332?text=${encodeURIComponent(
    isRTL ? 'مرحباً، أريد الاستفسار عن الخدمات' : 'Hello, I would like to enquire about your services'
  )}`;

  const mapsLink = 'https://maps.app.goo.gl/jWcPmvJwTzk3QoW5A';

  return (
    <section
      id="hero"
      className="relative h-screen max-h-screen overflow-hidden flex items-center justify-center"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image with Warm Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={cloudinaryUrl('image2')}
          alt="Al Rukn Al Dhahabi venue"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(250,250,248,0.92) 0%, rgba(245,243,238,0.85) 50%, rgba(237,224,196,0.88) 100%)',
          }}
        />
      </div>

      {/* Decorative Billiard Ball Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span
          className="ball-dot absolute top-1/4 left-1/4"
          style={{ background: '#EF4444', width: 40, height: 40, opacity: 0.15 }}
        />
        <span
          className="ball-dot absolute top-1/3 right-1/4"
          style={{ background: '#EAB308', width: 30, height: 30, opacity: 0.15 }}
        />
        <span
          className="ball-dot absolute bottom-1/3 left-1/3"
          style={{ background: '#3B82F6', width: 35, height: 35, opacity: 0.15 }}
        />
        <span
          className="ball-dot absolute bottom-1/4 right-1/3"
          style={{ background: '#22C55E', width: 25, height: 25, opacity: 0.15 }}
        />
      </div>

      {/* Content - Centered and Compact */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className={`text-center ${isRTL ? 'font-arabic' : ''}`}>
          {/* Service Badges - Compact */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              { icon: '🎱', en: 'Billiards', ar: 'بلياردو' },
              { icon: '🎱', en: 'Snooker', ar: 'سنوكر' },
              { icon: '🎮', en: 'PlayStation', ar: 'بلايستيشن' },
              { icon: '🏓', en: 'Table Tennis', ar: 'تنس طاولة' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--color-surface)]/80 backdrop-blur-sm border border-[var(--color-gold-primary)]/20 shadow-md"
              >
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-semibold text-[var(--color-text-secondary)]">
                  {isRTL ? item.ar : item.en}
                </span>
              </div>
            ))}
          </div>

          {/* Main Title - Compact, fits in viewport */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gold-shimmer mb-2 sm:mb-4 leading-tight px-2">
            {translations.hero_title}
          </h1>

          {/* Gold Divider */}
          <div className="gold-divider w-20 sm:w-24 mx-auto mb-4 sm:mb-6" />

          {/* Tagline - Compact */}
          <p className="text-xs sm:text-sm md:text-base text-[var(--color-text-secondary)] mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-2">
            {translations.hero_tagline}
          </p>

          {/* Location Badge - Compact */}
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-[var(--color-gold-primary)]/10 border border-[var(--color-gold-primary)]/30 hover:bg-[var(--color-gold-primary)]/20 transition-all mb-4 sm:mb-6 max-w-full"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-gold-dark)]" />
            <span className="font-semibold text-xs sm:text-sm text-[var(--color-text-secondary)] truncate">
              {translations.contact_address}
            </span>
          </a>

          {/* CTA Buttons - Compact, No Extra Spacing */}
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 justify-center w-full max-w-sm mx-auto px-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold gap-1.5 sm:gap-2 text-sm sm:text-base py-2 sm:py-2.5 px-4 sm:px-6"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              {translations.hero_cta_wa}
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline gap-1.5 sm:gap-2 text-sm sm:text-base py-2 sm:py-2.5 px-4 sm:px-6"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              {translations.hero_cta_maps}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}