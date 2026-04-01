"use client";

import { useLanguage } from "../context/LanguageContext";
import { MapPin, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── 3-D tilt on hover ─── */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-1, 1], [8, -8]), { stiffness: 180, damping: 18 });
  const rotY = useSpring(useTransform(mx, [-1, 1], [-8, 8]), { stiffness: 180, damping: 18 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => { mx.set(0); my.set(0); };
  return { ref, rotX, rotY, onMove, onLeave };
}

export default function Hero() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  // Detect mobile - only load floating images on tablet+
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* particles — client-only to avoid hydration mismatch */
  const [particles, setParticles] = useState<
    { id: number; left: string; bottom: string; duration: number; delay: number }[]
  >([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        bottom: `-${Math.random() * 10}px`,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 12,
      }))
    );
  }, []);

  const tilt1 = useTilt();
  const tilt2 = useTilt();

  const cloud = (id: string, w = 1280, h = 720) =>
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto:low,c_fill,w_${w},h_${h}/${id}`;

  const waLink = `https://wa.me/971542002332?text=${encodeURIComponent(
    isRTL ? "مرحباً، أريد الاستفسار عن الخدمات" : "Hello, I would like to enquire about your services"
  )}`;

  const mapsLink =
    "https://www.google.com/maps/place/Al+Rukn+Al+Dhahabi+Billiards+%D8%A7%D9%84%D8%B1%D9%83%D9%86+%D8%A7%D9%84%D8%B0%D9%87%D8%A8%D9%8A+%D9%84%D9%84%D8%A8%D9%84%D9%8A%D8%A7%D8%B1%D8%AF%D9%88%E2%80%AD/@25.3949008,55.4360865,15z/data=!4m6!3m5!1s0x3e5f59ac4e59252d:0x1e3392179b1580ff!8m2!3d25.3926971!4d55.4391933!16s%2Fg%2F11x7qxylq7?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D";

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full flex items-center justify-center overflow-hidden bg-[#06080d]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ── font ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
        @keyframes gridScroll {
          from { background-position: 0 0; }
          to   { background-position: 0 60px; }
        }
      `}</style>

      {/* ══════════════ CURTAIN LIFT ══════════════ */}
      <motion.div
        className="absolute inset-0 z-50 bg-[#06080d] origin-top pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      />

      {/* ══════════════ BACKGROUND ══════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* main bg image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src={cloud("background", 1600, 900)}
            alt="Al Rukn Al Dhahabi venue"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* moving gold grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            animation: "gridScroll 22s linear infinite",
          }}
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-[#06080d]/55" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 25%, rgba(6,8,13,0.75) 100%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#06080d] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#06080d]/60 to-transparent" />

        {/* gold orbs */}
        {[
          { cls: "top-[-80px] left-[-80px] w-[420px] h-[420px]", color: "rgba(212,175,55,0.16)", dur: 7, d: 0 },
          { cls: "bottom-[-120px] right-[-80px] w-[520px] h-[520px]", color: "rgba(180,130,20,0.12)", dur: 9, d: 1.5 },
          { cls: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px]", color: "rgba(250,204,21,0.07)", dur: 5.5, d: 0.8 },
        ].map((o, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full pointer-events-none ${o.cls}`}
            style={{ background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`, filter: "blur(50px)" }}
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", delay: o.d }}
          />
        ))}

        {/* particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-[2px] h-[2px] rounded-full bg-[#d4af37]/60 pointer-events-none"
            style={{ left: p.left, bottom: p.bottom }}
            animate={{ y: [0, -700], opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* ── FLOAT IMAGE 1 — top-left — Hide on mobile */}
        {!isMobile && (
          <motion.div
            ref={tilt1.ref}
            onMouseMove={tilt1.onMove}
            onMouseLeave={tilt1.onLeave}
            className="absolute top-6 left-3 sm:top-10 sm:left-8 w-48 sm:w-60 md:w-72 lg:w-[300px] z-10"
            style={{
              perspective: 900,
              rotateX: tilt1.rotX,
              rotateY: tilt1.rotY,
              aspectRatio: "4/3",
            }}
            initial={{ opacity: 0, x: -100, y: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
            transition={{ duration: 1.4, delay: 1.3, ease }}
          >
          <motion.div
            className="absolute -inset-[1.5px] rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(253,224,71,0.7), rgba(234,179,8,0.3), rgba(146,64,14,0.45))",
              filter: "blur(2px)",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(212,175,55,0.25)]"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={cloud("image3", 500, 375)} 
              alt="Premium billiards" 
              className="w-full h-full object-cover" 
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </motion.div>
        )}

        {/* ── FLOAT IMAGE 2 — bottom-right — Hide on mobile */}
        {!isMobile && (
          <motion.div
            ref={tilt2.ref}
            onMouseMove={tilt2.onMove}
            onMouseLeave={tilt2.onLeave}
            className="absolute bottom-14 right-3 sm:bottom-16 sm:right-8 w-48 sm:w-60 md:w-72 lg:w-[300px] z-10"
            style={{
              perspective: 900,
              rotateX: tilt2.rotX,
              rotateY: tilt2.rotY,
              aspectRatio: "4/3",
            }}
            initial={{ opacity: 0, x: 100, y: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
            transition={{ duration: 1.4, delay: 1.5, ease }}
          >
          <motion.div
            className="absolute -inset-[1.5px] rounded-2xl"
            style={{
              background: "linear-gradient(315deg, rgba(253,224,71,0.7), rgba(234,179,8,0.3), rgba(146,64,14,0.45))",
              filter: "blur(2px)",
            }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_12px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(212,175,55,0.25)]"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={cloud("image1", 500, 375)} 
              alt="Luxury gaming lounge" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </motion.div>
        )}
      </div>

      {/* ══════════════ CORNER ACCENTS ══════════════ */}
      {[
        "top-5 left-5 border-t border-l",
        "top-5 right-5 border-t border-r",
        "bottom-5 left-5 border-b border-l",
        "bottom-5 right-5 border-b border-r",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-14 h-14 border-[#d4af37]/35 z-20 pointer-events-none ${pos}`}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 + i * 0.1, ease }}
        />
      ))}

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <div className="relative z-20 w-full max-w-3xl mx-auto px-5 flex flex-col items-center text-center">

        {/* title */}
        <div className="mb-3">
          <motion.span
            className={`block font-extrabold tracking-[0.18em] text-white leading-none
              text-[clamp(2.2rem,6vw,4.2rem)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]
              ${isRTL ? "font-arabic" : ""}`}
            style={{ fontFamily: isRTL ? undefined : "'Cairo', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease }}
          >
            {isRTL ? "الركن" : "AL RUKN"}
          </motion.span>

          <motion.div
            className="mx-auto my-3 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.2, ease: "easeOut" }}
            style={{ width: 200, transformOrigin: "center" }}
          />

          <motion.span
            className={`block font-black leading-none tracking-[0.12em] pb-12
              text-[clamp(2.8rem,8vw,5.4rem)] ${isRTL ? "font-arabic" : ""}`}
            style={{
              fontFamily: isRTL ? undefined : "'Cairo', sans-serif",
              background: "linear-gradient(180deg, #FEF08A 0%, #EAB308 42%, #A16207 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(234,179,8,0.55))",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.85, ease }}
          >
            {isRTL ? "الذهبي" : "AL DHAHABI"}
          </motion.span>
        </div>

        {/* subtitle */}
        <motion.p
          className={`text-white font-bold tracking-[0.26em] uppercase mb-3
            text-[clamp(14px,2.2vw,18px)] ${isRTL ? "font-arabic tracking-normal" : ""}`}
          style={{ fontFamily: isRTL ? undefined : "'Cairo', sans-serif" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.1, ease }}
        >
          {isRTL
            ? "صالة بلياردو وألعاب ترفيهية فاخرة في عجمان"
            : "Ajman's Premium Billiards & Gaming Lounge"}
        </motion.p>

        {/* location */}
        <motion.div
          className={`flex items-center justify-center gap-2 mb-9 ${isRTL ? "flex-row-reverse" : ""}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.25, ease }}
        >
          <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
          <span className={`text-white/90 text-base font-semibold tracking-wide ${isRTL ? "font-arabic" : ""}`}>
            {isRTL ? "جراند مول، عجمان، الإمارات" : "Grand Mall, Ajman, UAE"}
          </span>
        </motion.div>

        {/* buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.45, ease }}
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden rounded-xl px-9 py-4 font-bold text-base tracking-[0.12em] uppercase text-black transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_40px_rgba(234,179,8,0.7)] active:scale-[0.97]"
            style={{
              background: "linear-gradient(155deg, #fde047 0%, #eab308 50%, #ca8a04 100%)",
              boxShadow: "0 4px 28px rgba(234,179,8,0.45)",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            <FaWhatsapp className="w-5 h-5 shrink-0" />
            {isRTL ? "تواصل معنا" : "WhatsApp Us"}
          </a>

          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden rounded-xl border border-[#d4af37]/45 bg-[#d4af37]/[0.08] backdrop-blur-md px-9 py-4 font-bold text-base tracking-[0.12em] uppercase text-white transition-all duration-300 hover:scale-[1.04] hover:border-[#d4af37]/80 hover:bg-[#d4af37]/[0.14] hover:shadow-[0_4px_24px_rgba(212,175,55,0.2)] active:scale-[0.97]"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[600ms] bg-gradient-to-r from-transparent via-[#d4af37]/12 to-transparent pointer-events-none" />
            <MapPin className="w-5 h-5 shrink-0" />
            {isRTL ? "الاتجاهات" : "Get Directions"}
          </a>
        </motion.div>
      </div>

      {/* ══════════════ SCROLL INDICATOR ══════════════ */}
      <motion.button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span className="text-[9px] tracking-[0.28em] uppercase text-[#d4af37]/50 group-hover:text-[#d4af37]/80 transition-colors duration-300">
          {isRTL ? "اكتشف" : "Explore"}
        </span>
        <motion.div
          className="w-9 h-9 rounded-full border border-[#d4af37]/35 group-hover:border-[#d4af37]/70 flex items-center justify-center transition-colors duration-300"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#d4af37]/60 group-hover:text-[#d4af37]" />
        </motion.div>
      </motion.button>
    </section>
  );
}