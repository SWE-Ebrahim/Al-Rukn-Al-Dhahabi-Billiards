'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { language, translations } = useLanguage();
  const isRTL = language === 'ar';
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { key: 'nav_home', href: '#hero' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_services', href: '#services' },
    { key: 'nav_gallery', href: '#gallery' },
    { key: 'nav_contact', href: '#contact' },
  ] as const;

  return (
    <footer className="bg-[var(--color-text-primary)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            dir="ltr"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 100 100"
              className="w-14 h-14 drop-shadow-lg group-hover:scale-110 transition-transform"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="#000000"
                stroke="#C9A84C"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="22" fill="#FFFFFF" />
              <text
                x="50"
                y="50"
                fontSize="28"
                fontWeight="bold"
                fill="#000000"
                textAnchor="middle"
                dominantBaseline="central"
              >
                8
              </text>
              <ellipse
                cx="35"
                cy="35"
                rx="18"
                ry="24"
                fill="url(#footerShine)"
                opacity="0.5"
              />
              <defs>
                <radialGradient id="footerShine">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <div>
              <span className="text-white text-2xl font-bold block group-hover:text-[var(--color-gold-primary)] transition-colors">
                {translations.footer_brand}
              </span>
              <span className="text-[var(--color-gold-primary)] text-sm font-medium">
                {translations.footer_subtitle}
              </span>
            </div>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)] animate-pulse" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-primary)] to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[var(--color-gold-primary)] animate-pulse" />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6" dir={isRTL ? 'rtl' : 'ltr'}>
            {footerLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-white/80 hover:text-[var(--color-gold-primary)] transition-colors text-sm font-medium"
              >
                {translations[link.key]}
              </a>
            ))}
          </div>

          {/* Copyright & Powered By */}
          <div
            className="flex flex-col items-center gap-4 pt-6 border-t border-white/10 w-full"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <p className="text-white/60 text-sm text-center">
              {translations.footer_copyright.replace('2025', String(currentYear))}
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>{translations.footer_powered}</span>
              <Link
                href="https://ebrahimalmahbosh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-gold-primary)] hover:text-[var(--color-gold-light)] font-semibold underline underline-offset-2"
                dir="ltr"
              >
                EtechStudio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}