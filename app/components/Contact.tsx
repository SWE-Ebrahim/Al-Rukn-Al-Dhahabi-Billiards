"use client";

import { useLanguage } from "../context/LanguageContext";
import { MapPin, BellRing } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Contact() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const whatsappLink = `https://wa.me/971542002332?text=${encodeURIComponent(
    isRTL ? "مرحباً، أود الاستفسار عن خدماتكم" : "Hello, I would like to enquire about your services"
  )}`;

  const whatsappChannelLink = "https://whatsapp.com/channel/0029Vb7NMQaGU3BK3yTXrZ1c";
  const mapsLink = "https://www.google.com/maps/place/Al+Rukn+Al+Dhahabi+Billiards+%D8%A7%D9%84%D8%B1%D9%83%D9%86+%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A+%D9%84%D9%84%D8%A8%D9%84%D9%8A%D8%A7%D8%B1%D8%AF%D9%88%E2%80%AD/@25.3949008,55.4360865,15z/data=!4m6!3m5!1s0x3e5f59ac4e59252d:0x1e3392179b1580ff!8m2!3d25.3926971!4d55.4391933!16s%2Fg%2F11x7qxylq7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D";
  const mapEmbedUrl = "https://maps.google.com/maps?q=25.392703,55.439188&z=16&output=embed";

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 lg:py-24 bg-[#0d1117] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background glow */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column: Contact Cards */}
          <motion.div 
            className={`${isRTL ? "font-arabic lg:order-2" : "lg:order-1"} flex flex-col justify-center`}
            initial={{ opacity: 0, x: isRTL ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-[#fce28b] via-[#d4af37] to-[#aa8925] mb-8 leading-tight drop-shadow-sm">
              {isRTL ? 'تواصل معنا' : 'Get in Touch'}
            </h2>

            <div className="flex flex-col gap-4 w-full max-w-lg">

              {/* WhatsApp Card */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center text-start gap-4 bg-[#161b22] border border-white/10 hover:border-[#d4af37]/40 hover:bg-[#1c222b] py-5 px-5 sm:px-6 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-300"
              >
                <div className="bg-[#0d1117] p-3.5 sm:p-4 rounded-full border border-white/10 shrink-0 group-hover:border-[#d4af37]/50 transition-colors duration-300">
                  <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4af37] drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-gray-400 font-sans text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-0.5">
                    {isRTL ? 'تحدث معنا على واتساب' : 'Chat with us on WhatsApp'}
                  </span>
                  <span
                    dir="ltr"
                    className="text-white text-[17px] sm:text-xl md:text-2xl font-bold tracking-wide leading-tight"
                  >
                    +971 54 200 2332
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row items-center text-start gap-4 bg-[#161b22] border border-white/10 hover:border-[#d4af37]/40 hover:bg-[#1c222b] py-5 px-5 sm:px-6 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all duration-300"
              >
                <div className="bg-[#0d1117] p-3.5 sm:p-4 rounded-full border border-white/10 shrink-0 group-hover:border-[#d4af37]/50 transition-colors duration-300">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4af37] drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-gray-400 font-sans text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-0.5">
                    {isRTL ? 'موقعنا' : 'Our Location'}
                  </span>
                  <span className="text-white text-sm sm:text-lg font-bold tracking-wide leading-tight">
                    {isRTL ? 'غراند مول، عجمان' : 'Grand Mall, Ajman'}
                  </span>
                </div>
              </a>

              {/* NEW: WhatsApp Memberships Channel banner style */}
              <a
                href={whatsappChannelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex flex-row items-center text-start gap-4 bg-linear-to-br from-[#12241a] to-[#0a140e] border border-emerald-500/30 hover:border-emerald-400/70 hover:from-[#183324] hover:to-[#0f2117] py-5 px-5 sm:px-6 rounded-2xl shadow-[0_8px_25px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all duration-300 mt-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] pointer-events-none group-hover:bg-emerald-400/20 transition-all duration-500 rounded-full" />

                <div className="relative bg-[#08120c] p-3.5 sm:p-4 rounded-full border border-emerald-500/30 shrink-0 group-hover:border-emerald-400/70 transition-colors duration-300">
                  <BellRing className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)] group-hover:animate-pulse" />
                </div>
                <div className="flex flex-col justify-center z-10 relative">
                  <span className="text-emerald-400 font-sans text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-0.5">
                    {isRTL ? 'عضوية واتساب' : 'WhatsApp Membership'}
                  </span>
                  <span className="text-white text-[13px] sm:text-base md:text-lg font-bold tracking-wide leading-tight line-clamp-2">
                    {isRTL ? 'انضم لقناتنا للمزيد من العروض' : 'Join our channel for latest offers!'}
                  </span>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Column: Floating Dark Map */}
          <motion.div 
            className={`relative ${isRTL ? 'lg:order-1' : 'lg:order-2'} w-full h-[250px] sm:h-[400px] lg:h-[550px] group mt-6 lg:mt-0`}
            initial={{ opacity: 0, x: isRTL ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] border border-white/10 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500 bg-[#161b22]">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full border-0 absolute z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: "invert(100%) hue-rotate(180deg) brightness(90%) contrast(120%) grayscale(30%) sepia(20%)" }}
              ></iframe>
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_40px_rgba(13,17,23,0.9)]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
