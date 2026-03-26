'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const { language, translations } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const cloudinaryUrl = (publicId: string, transform = 'f_auto,q_auto,c_fill,w_600,h_400') => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${publicId}`;
  };

  const images = [
    { id: 'image1', span: 2 },
    { id: 'image2', span: 1 },
    { id: 'image3', span: 1 },
    { id: 'image4', span: 2 },
    { id: 'photo1', span: 1 },
    { id: 'photo2', span: 1 },
    { id: 'image10', span: 1 },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  return (
    <section
      id="gallery"
      className="min-h-screen py-12 lg:py-20 bg-[var(--color-bg-alt)] flex items-center"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Responsive typography */}
        <div className={`text-center mb-6 sm:mb-8 lg:mb-12 ${isRTL ? 'font-arabic' : ''}`}>
          <span className="inline-block px-3 py-1.5 rounded-full bg-[var(--color-gold-primary)]/10 text-[var(--color-gold-dark)] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 border border-[var(--color-gold-primary)]/20">
            {translations.gallery_badge}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-2 sm:mb-3 leading-tight">
            {translations.gallery_title}
          </h2>
          <div className="gold-divider w-12 sm:w-16 lg:w-20 mx-auto" />
        </div>

        {/* Gallery Grid - Optimized for all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[180px] lg:auto-rows-[200px]">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
                img.span === 2 ? 'row-span-2' : ''
              }`}
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={cloudinaryUrl(img.id, img.span === 2 ? 'f_auto,q_auto,c_fill,w_800,h_800' : undefined)}
                alt={`Gallery image ${idx + 1}`}
                width={img.span === 2 ? 800 : 600}
                height={img.span === 2 ? 800 : 400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[var(--color-gold-primary)]/0 group-hover:bg-[var(--color-gold-primary)]/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white hover:text-[var(--color-gold-primary)] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(isRTL ? 1 : -1);
            }}
            className={`absolute left-6 p-3 text-white hover:text-[var(--color-gold-primary)] transition-colors ${
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
            className={`absolute right-6 p-3 text-white hover:text-[var(--color-gold-primary)] transition-colors ${
              selectedImage === images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
            disabled={selectedImage === images.length - 1}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <Image
            src={cloudinaryUrl(images[selectedImage].id, 'f_auto,q_auto,c_fill,w_1600,h_1200')}
            alt={`Gallery image ${selectedImage + 1}`}
            width={1600}
            height={1200}
            className="max-w-full max-h-screen object-contain"
            onClick={(e) => e.stopPropagation()}
            unoptimized
          />
        </div>
      )}
    </section>
  );
}