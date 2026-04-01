'use client';

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const cloudinaryUrl = (publicId: string, transform = 'f_auto,q_auto:low,c_fill,w_600,h_450') => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${publicId}`;
  };

  const galleryImages = [
    'image1',
    'background',
    'image3',
    'image4',
    'photo1',
    'photo2',
    'image10'
  ];

  return (
    <section
      id="gallery"
      className="py-16 lg:py-24 bg-[#0d1117] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background glow */}
      <motion.div 
        className="absolute top-1/2 left-3/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Heading */}
        <motion.div 
          className={`text-center flex flex-col items-center mb-12 ${isRTL ? 'font-arabic' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
            {isRTL ? 'معرض الصور' : 'Gallery'}
          </p>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d4af37] leading-tight pb-3"
            style={{ filter: 'drop-shadow(0px 4px 6px rgba(212, 175, 55, 0.4))' }}
          >
            {isRTL ? 'مرافقنا' : 'OUR VENUE'}
          </h2>
        </motion.div>

        {/* Static Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((imgId, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative overflow-hidden rounded-xl bg-[#161b22] border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/40 transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={cloudinaryUrl(imgId)}
                alt={`Gallery Image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />

              {/* Optional subtle overlay */}
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}