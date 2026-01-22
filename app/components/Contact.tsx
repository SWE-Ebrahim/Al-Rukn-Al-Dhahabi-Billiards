"use client";

import { Instagram, MapPin, Phone } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

interface ContactProps {}

export default function Contact({}: ContactProps) {
  const { language, translations } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isRTL = language === "ar";

  // Bilingual content
  const content = {
    badge: isRTL ? "تواصل معنا" : "GET IN TOUCH",
    title: isRTL ? "اتصل بنا" : "Contact Us",
    message: isRTL
      ? "هل أنت مستعد لتجربة الرفاهية؟ اتصل بنا اليوم!"
      : "Ready to experience luxury? Contact us today!",
    callNow: isRTL ? "اتصل الآن" : "Call Now",
    whatsapp: isRTL ? "محادثة واتساب" : "Chat on WhatsApp",
    followUs: isRTL ? "تابعنا" : "Follow Us",
    location: isRTL ? "جراند مول عجمان" : "Grand Mall Ajman",
    phone: "+971 54 200 2332",
  };

  if (!isClient) {
    return <div className="relative h-screen bg-slate-900"></div>;
  }

  // Cloudinary video background
  const cloudinaryUrl = (publicId: string) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) return "/placeholder-video.mp4";
    return `https://res.cloudinary.com/${cloudName}/video/upload/e_brightness:-30/${publicId}`;
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-slate-900"
      dir={isRTL ? "rtl" : "ltr"}
      id="contact"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover mix-blend-overlay"
        >
          <source src={cloudinaryUrl("vid1_os1iuf")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_50%)]"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-500/8 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/4 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8">
          {/* Header */}
          <div
            className={`space-y-3 sm:space-y-4 ${isRTL ? "font-arabic" : ""}`}
          >
            <div className="inline-block mb-3 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 via-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-semibold text-yellow-400 tracking-wider uppercase">
                {content.badge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-3 leading-tight">
              {content.title}
            </h2>

            <div className="flex justify-center mb-4">
              <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full shadow-lg shadow-yellow-500/50"></div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-slate-300/90 max-w-xl mx-auto leading-relaxed">
              {content.message}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Phone Number */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="tel:+971542002332"
                className="group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 group-hover:border-green-400/50 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {content.callNow}
                  </p>
                  <p
                    className="text-base sm:text-lg font-semibold text-white"
                    dir="ltr"
                  >
                    {content.phone}
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/971542002332"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 group-hover:border-green-400/50 transition-colors">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    {content.whatsapp}
                  </p>
                </div>
              </a>
            </div>

            {/* Follow Us Section */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {content.followUs}
              </h3>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/alrukn.aldhahabi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-pink-600/10 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/10"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-500/30 group-hover:border-pink-400/50 transition-colors">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-pink-300 transition-colors">
                    Instagram
                  </span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@alrukn.aldhahabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-black/30 to-black/40 border border-white/20 group-hover:border-white/40 transition-colors">
                    <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                    TikTok
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <a href="https://maps.app.goo.gl/jWcPmvJwTzk3QoW5A"
              target="_blank"
              rel="noopener noreferrer">
              <div className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-blue-500/15 to-blue-500/10 border border-blue-500/30 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-xs sm:text-sm md:text-base text-blue-100/90 font-semibold">
                  {content.location}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
