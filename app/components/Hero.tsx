"use client";

import { Instagram, MapPin, Phone, Globe } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const { language, translations, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === "ar";

  // Use translations from context
  const t = {
    subtitle: translations.subtitle,
    heroTitle: translations.heroTitle,
    location: translations.location,
    heroDescription: translations.heroDescription,
    contactUs: translations.contactUs,
    viewServices: translations.viewServices,
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/alrukn.aldhahabi/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@alrukn.aldhahabi",
      label: "TikTok",
      color: "hover:text-white",
    },
    {
      icon: MapPin,
      href: "https://maps.google.com/?q=Grand+Mall+Ajman+Al+Rukn+Al+Dhahabi",
      label: "Google Maps",
      color: "hover:text-emerald-400",
    },
  ];

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setIsTransitioning(true);

    setTimeout(() => {
      setLanguage(newLanguage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  if (!mounted) {
    return <div className="h-screen bg-slate-950"></div>;
  }

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="relative h-screen overflow-hidden bg-slate-950"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.1),transparent_50%)]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-yellow-600/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      {/* Content Container with Transition */}
      <div
        className={`relative h-full flex flex-col transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        {/* Header */}
        <header className="flex-shrink-0 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              {/* 8-Ball Logo */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* 8-Ball SVG Icon */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg group-hover:bg-yellow-500/30 transition-all duration-300"></div>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 100 100"
                    className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                  >
                    {/* Outer black circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="#000000"
                      stroke="#333333"
                      strokeWidth="2"
                    />

                    {/* White circle for number */}
                    <circle cx="50" cy="50" r="20" fill="#FFFFFF" />

                    {/* Number 8 */}
                    <text
                      x="50"
                      y="50"
                      fontSize="24"
                      fontWeight="bold"
                      fill="#000000"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontFamily="Arial, sans-serif"
                    >
                      8
                    </text>

                    {/* Shine effect */}
                    <ellipse
                      cx="35"
                      cy="35"
                      rx="15"
                      ry="20"
                      fill="url(#shine)"
                      opacity="0.3"
                    />

                    <defs>
                      <radialGradient id="shine">
                        <stop
                          offset="0%"
                          stopColor="#ffffff"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ffffff"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                {/* Subtitle next to logo */}
                <div className="hidden sm:block">
                  <p
                    className={`text-xs sm:text-sm lg:text-base text-yellow-500/80 font-medium ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t.subtitle}
                  </p>
                </div>
              </div>

              {/* Social Icons + Language Toggle */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Social Links */}
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 sm:p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}

                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  disabled={isTransitioning}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/40 text-yellow-400 hover:text-yellow-300 transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-yellow-500/10"
                  aria-label="Toggle language"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-semibold">
                    {language === "en" ? "العربية" : "English"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto w-full">
            <div
              className={`text-center space-y-6 sm:space-y-8 lg:space-y-10 ${isRTL ? "font-arabic" : ""}`}
            >
              {/* Main Title with Enhanced Styling */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 leading-tight tracking-tight drop-shadow-2xl">
                  {t.heroTitle}
                </h1>
                <div className="flex justify-center">
                  <div className="h-1 sm:h-1.5 w-20 sm:w-28 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full shadow-lg shadow-yellow-500/50"></div>
                </div>
              </div>

              {/* Location Badge with Enhanced Design - Now Clickable */}
              <div className="flex justify-center animate-fade-in">
                <a
                  href="https://maps.app.goo.gl/Wsri2g5SX3fMaFPc7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-500/15 to-yellow-500/10 border border-yellow-500/30 backdrop-blur-md hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-yellow-100/90 font-semibold">
                    {t.location}
                  </p>
                </a>
              </div>

              {/* Description with Better Readability */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300/90 max-w-4xl mx-auto leading-relaxed px-4">
                {t.heroDescription}
              </p>

              {/* CTA Buttons with Enhanced Styling */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4 sm:pt-6 lg:pt-8">
                {/* Primary Button */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 lg:px-14 py-3.5 sm:py-4 lg:py-5 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">{t.contactUs}</span>
                </button>

                {/* Secondary Button */}
                <button
                  onClick={() => {
                    const pdfPath =
                      language === "ar"
                        ? "/AR-Services.pdf"
                        : "/EN-Services.pdf";
                    window.open(pdfPath, "_blank");
                  }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-10 lg:px-14 py-3.5 sm:py-4 lg:py-5 bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-yellow-500/60 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                >
                  <span className="group-hover:text-yellow-400 transition-colors">
                    {t.viewServices}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex-shrink-0 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8">
          {/* Footer content removed - will be added in other sections */}
        </footer>
      </div>

      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 100%;
        }
        .bg-pos-0 {
          background-position: 0% 0%;
        }
        .bg-pos-100 {
          background-position: 100% 0%;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
