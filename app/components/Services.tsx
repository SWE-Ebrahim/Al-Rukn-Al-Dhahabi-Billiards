'use client';

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Services() {
  const { language, translations } = useLanguage();
  const isRTL = language === 'ar';
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="py-20 bg-[var(--color-bg)]" />;
  }

  const services = [
    {
      color: '#EF4444', // red ball
      icon: '🎱',
      titleKey: 'service_billiards_title',
      descKey: 'service_billiards_desc',
    },
    {
      color: '#EAB308', // yellow ball
      icon: '🎱',
      titleKey: 'service_snooker_title',
      descKey: 'service_snooker_desc',
    },
    {
      color: '#3B82F6', // blue ball
      icon: '🎮',
      titleKey: 'service_playstation_title',
      descKey: 'service_playstation_desc',
    },
    {
      color: '#22C55E', // green ball
      icon: '🏓',
      titleKey: 'service_tennis_title',
      descKey: 'service_tennis_desc',
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-12 lg:py-20 bg-[var(--color-bg)] flex items-center"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive typography */}
        <div className={`text-center mb-6 sm:mb-8 lg:mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          <span className="inline-block px-3 py-1.5 rounded-full bg-[var(--color-gold-primary)]/10 text-[var(--color-gold-dark)] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 border border-[var(--color-gold-primary)]/20">
            {translations.services_badge}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-2 sm:mb-3 leading-tight">
            {translations.services_title}
          </h2>
          <div className="gold-divider w-12 sm:w-16 lg:w-20 mx-auto mb-3 sm:mb-4" />
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-xl mx-auto px-4 leading-relaxed">
            {translations.services_desc}
          </p>
        </div>

        {/* Services Grid - Better mobile spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto px-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card p-4 lg:p-6 flex flex-col gap-3 lg:gap-4 group"
            >
              {/* Billiard Ball Color Dot */}
              <span
                className="ball-dot"
                style={{
                  background: service.color,
                  width: 16,
                  height: 16,
                }}
              />
              
              {/* Icon */}
              <span className="text-4xl lg:text-5xl">{service.icon}</span>
              
              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-[var(--color-text-primary)]">
                {/* @ts-ignore */}
                {translations[service.titleKey]}
              </h3>
              
              {/* Description */}
              <p className="text-sm lg:text-base text-[var(--color-text-secondary)] leading-relaxed">
                {/* @ts-ignore */}
                {translations[service.descKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}