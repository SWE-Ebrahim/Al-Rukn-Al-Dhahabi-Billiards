'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const cloudinaryUrl = (publicId: string, transform = 'f_auto,q_auto,c_fill,w_800,h_600') => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${publicId}`;
  };

  // Exact images verified from details.md
  const galleryImages = [
    'image1',
    'image2',
    'image3',
    'image4',
    'photo1',
    'photo2',
    'image10'
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <section
      id="gallery"
      className="py-16 lg:py-24 bg-[#0d1117] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-3/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className={`text-center flex flex-col items-center mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          <p className="text-gray-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
            {isRTL ? 'معرض الصور' : 'Gallery'}
          </p>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d4af37] leading-tight pb-3"
            style={{ filter: 'drop-shadow(0px 4px 6px rgba(212, 175, 55, 0.4))' }}
          >
            {isRTL ? 'مرافقنا' : 'OUR VENUE'}
          </h2>
        </div>

        {/* Uniform Grid - Not Randomized */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {galleryImages.map((imgId, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl cursor-pointer bg-[#161b22] border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:border-[#d4af37]/40 transition-all duration-500 aspect-4/3"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={cloudinaryUrl(imgId)}
                alt={`Al Rukn Al Dhahabi Gallery Image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0d1117]/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white hover:text-[#d4af37] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(isRTL ? 1 : -1);
            }}
            className={`absolute left-4 md:left-10 p-3 text-white hover:text-[#d4af37] transition-colors ${
              selectedImage === 0 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
            disabled={selectedImage === 0}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(isRTL ? -1 : 1);
            }}
            className={`absolute right-4 md:right-10 p-3 text-white hover:text-[#d4af37] transition-colors ${
              selectedImage === galleryImages.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
            disabled={selectedImage === galleryImages.length - 1}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative w-[90vw] h-[85vh] md:w-[80vw] md:h-[90vh]">
            <Image
              src={cloudinaryUrl(galleryImages[selectedImage], 'f_auto,q_auto,c_fit,w_1920,h_1080')}
              alt={`Gallery image ${selectedImage + 1} zoomed`}
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}