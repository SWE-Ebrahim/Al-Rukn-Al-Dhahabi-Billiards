"use client";

import { Instagram, MapPin, Phone, Globe } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const { language, translations, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://res.cloudinary.com/dtwjhjtjw/image/upload/v1769009201/image2.jpg",
    "https://res.cloudinary.com/dtwjhjtjw/image/upload/v1769009201/image3.jpg",
    "https://res.cloudinary.com/dtwjhjtjw/image/upload/v1769248245/photo2.jpg"
  ];

  // Rotate images every 2 seconds immediately when mounted
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === "ar";

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
      color: "text-pink-500",
      hoverColor: "hover:text-pink-400"
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@alrukn.aldhahabi",
      label: "TikTok",
      color: "text-white",
      hoverColor: "hover:text-gray-200"
    },
    {
      icon: MapPin,
      href: "https://maps.google.com/?q=Grand+Mall+Ajman+Al+Rukn+Al+Dhahabi",
      label: "Google Maps",
      color: "text-red-500",
      hoverColor: "hover:text-red-400"
    },
  ];

  const toggleLanguage = useCallback(() => {
    const newLanguage = language === "en" ? "ar" : "en";
    setIsTransitioning(true);

    setTimeout(() => {
      setLanguage(newLanguage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  }, [language, setLanguage]);

  if (!mounted) {
    return <div className="h-screen bg-slate-950"></div>;
  }

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="relative h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Images - Visible Immediately */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.75) contrast(1.05)'
            }}
          />
        ))}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-900/40 to-slate-950/50" />

      {/* Content Container */}
      <div
        className={`relative h-full flex flex-col transition-opacity duration-200 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        {/* Header */}
        <header className="flex-shrink-0 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              {/* 8-Ball Logo */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl group-hover:bg-yellow-500/50 transition-all duration-300 animate-pulse"></div>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 100 100"
                    className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="#000000"
                      stroke="#333333"
                      strokeWidth="2.5"
                    />
                    <circle cx="50" cy="50" r="22" fill="#FFFFFF" className="drop-shadow-lg" />
                    <text
                      x="50"
                      y="50"
                      fontSize="28"
                      fontWeight="bold"
                      fill="#000000"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontFamily="Arial, sans-serif"
                    >
                      8
                    </text>
                    <ellipse
                      cx="35"
                      cy="35"
                      rx="18"
                      ry="24"
                      fill="url(#enhancedShine)"
                      opacity="0.4"
                    />
                    <defs>
                      <radialGradient id="enhancedShine">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                <div className="hidden sm:block">
                  <p className={`text-xs sm:text-sm lg:text-base text-yellow-500/80 font-medium ${isRTL ? "font-arabic" : ""}`}>
                    {t.subtitle}
                  </p>
                </div>
              </div>

              {/* Social Icons + Language Toggle */}
              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 sm:p-3.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-400 ${social.hoverColor} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${social.color}`} />
                    </a>
                  );
                })}

                <button
                  onClick={toggleLanguage}
                  disabled={isTransitioning}
                  className="flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/40 text-yellow-400 hover:text-yellow-300 transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-yellow-500/10 active:scale-95"
                  aria-label="Toggle language"
                >
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
                    {language === "en" ? "العربية" : "English"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 z-10">
          <div className="max-w-6xl mx-auto w-full">
            <div className={`text-center space-y-6 sm:space-y-8 lg:space-y-10 ${isRTL ? "font-arabic" : ""}`}>
              {/* Main Title */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 leading-tight tracking-tight drop-shadow-2xl">
                  {t.heroTitle}
                </h1>
                <div className="flex justify-center">
                  <div className="h-1 sm:h-1.5 w-20 sm:w-28 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full shadow-lg shadow-yellow-500/50"></div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex justify-center animate-fade-in">
                <a
                  href="https://maps.app.goo.gl/Wsri2g5SX3fMaFPc7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-500/15 to-yellow-500/10 border border-yellow-500/30 backdrop-blur-md hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20 cursor-pointer hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-yellow-100/90 font-semibold">
                    {t.location}
                  </p>
                </a>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300/90 max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-lg">
                {t.heroDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4 sm:pt-6 lg:pt-8">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 lg:px-14 py-3.5 sm:py-4 lg:py-5 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">{t.contactUs}</span>
                </button>

                <button
                  onClick={() => {
                    const pdfPath = language === "ar" ? "/AR-Services.pdf" : "/EN-Services.pdf";
                    window.open(pdfPath, "_blank");
                  }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-10 lg:px-14 py-3.5 sm:py-4 lg:py-5 bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-yellow-500/60 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="group-hover:text-yellow-400 transition-colors">
                    {t.viewServices}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-yellow-500 w-8' 
                  : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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