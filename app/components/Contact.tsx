'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const { language, translations } = useLanguage();
  const isRTL = language === 'ar';

  const whatsappLink = `https://wa.me/971542002332?text=${encodeURIComponent(
    isRTL ? 'مرحباً، أريد الاستفسار عن الخدمات' : 'Hello, I would like to enquire about your services'
  )}`;

  const mapsLink = 'https://maps.app.goo.gl/jWcPmvJwTzk3QoW5A';
  const instagramLink = 'https://www.instagram.com/alrukn.aldhahabi/';
  const tiktokLink = 'https://www.tiktok.com/@alrukn.aldhahabi';

  return (
    <section
      id="contact"
      className="min-h-screen py-12 lg:py-20 bg-[var(--color-bg)] flex items-center"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive typography */}
        <div className={`text-center mb-6 sm:mb-8 lg:mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-2 sm:mb-3 leading-tight">
            {translations.contact_title}
          </h2>
          <div className="gold-divider w-12 sm:w-16 lg:w-20 mx-auto" />
        </div>

        {/* Two Column Layout - Better responsive spacing */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Column: Contact Info */}
          <div className={`${isRTL ? 'font-arabic' : ''} space-y-8`}>
            {/* Address */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 card group"
            >
              <MapPin className="w-6 h-6 text-[var(--color-gold-dark)] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] mb-2">
                  {translations.contact_address}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  Click for directions
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+971542002332"
              className="flex items-center gap-4 p-6 card group"
            >
              <Phone className="w-6 h-6 text-[var(--color-gold-dark)] flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)]">
                  {translations.contact_phone}
                </h3>
              </div>
            </a>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-[var(--color-text-primary)] mb-4">
                {translations.contact_follow_us}
              </h3>
              <div className="flex gap-4">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/30 hover:border-pink-500/50 transition-all hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-pink-500" />
                </a>
                <a
                  href={tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gradient-to-r from-black/10 to-black/20 border border-gray-400/30 hover:border-gray-400/50 transition-all hover:scale-110"
                >
                  <FaTiktok className="w-6 h-6 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp CTA */}
          <div className={`${isRTL ? 'font-arabic' : ''}`}>
            <div className="card p-8 lg:p-10 text-center bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-6">
                <FaWhatsapp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {translations.contact_wa_title}
              </h3>
              <p className="text-green-700 mb-6 font-semibold text-lg">
                {translations.contact_phone}
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center bg-green-600 hover:bg-green-700 text-white !shadow-green-500/30"
              >
                <FaWhatsapp className="w-5 h-5" />
                {translations.contact_wa_cta}
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center mt-4"
              >
                <MapPin className="w-5 h-5" />
                {translations.contact_maps_cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}