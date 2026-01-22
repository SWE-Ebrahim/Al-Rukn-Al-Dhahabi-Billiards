'use client';

import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';
import { Sparkles, Crown, Trophy } from 'lucide-react';

interface SubSectionProps {}

export default function SubSection({}: SubSectionProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isClient, setIsClient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Enhanced rotating content with images and bilingual text
  const slides = [
    {
      imageId: 'image2',
      icon: Crown,
      title: {
        en: 'Where Champions Play',
        ar: 'حيث يلعب الأبطال'
      },
      text: {
        en: 'Step into a world of precision and skill. Our tournament-grade tables and professional atmosphere create the perfect setting for players who demand excellence in every shot.',
        ar: 'ادخل إلى عالم من الدقة والمهارة. طاولاتنا بمستوى البطولات والأجواء الاحترافية تخلق البيئة المثالية للاعبين الذين يطالبون بالتميز في كل ضربة.'
      }
    },
    {
      imageId: 'image3',
      icon: Sparkles,
      title: {
        en: 'Luxury Meets Performance',
        ar: 'الفخامة تلتقي بالأداء'
      },
      text: {
        en: 'Experience billiards in unparalleled comfort. Premium leather seating, ambient lighting, and meticulously maintained tables combine to deliver an experience that goes beyond the game.',
        ar: 'استمتع بالبلياردو في راحة لا مثيل لها. مقاعد جلدية فاخرة وإضاءة محيطة وطاولات يتم صيانتها بدقة لتقديم تجربة تتجاوز اللعبة.'
      }
    },
    {
      imageId: 'image4',
      icon: Trophy,
      title: {
        en: 'Your Victory Starts Here',
        ar: 'يبدأ انتصارك هنا'
      },
      text: {
        en: 'Whether you\'re practicing for competition or enjoying time with friends, every moment at our venue is designed to elevate your game and create unforgettable memories.',
        ar: 'سواء كنت تتدرب للمنافسة أو تستمتع بالوقت مع الأصدقاء، كل لحظة في مكاننا مصممة لترقية لعبتك وخلق ذكريات لا تُنسى.'
      }
    }
  ];

  // Auto-rotate slides every 7 seconds for better readability
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Cloudinary URL builder with brightness reduction - optimized for full screen
  const cloudinaryUrl = (publicId: string) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) return "/placeholder-image.jpg";
    return `https://res.cloudinary.com/${cloudName}/image/upload/e_brightness:-30,c_fill,h_1080,w_1920,f_auto,q_auto,dpr_auto/${publicId}`;
  };

  if (!isClient) {
    return <div className="relative h-screen w-screen bg-slate-900"></div>;
  }

  const currentContent = slides[currentSlide];
  const Icon = currentContent.icon;

  return (
    <section 
      className="relative h-screen w-screen overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
      id="features"
    >
      {/* Full-screen background images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.imageId}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={cloudinaryUrl(slide.imageId)}
              alt={slide.title.en}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Enhanced overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Centered content with enhanced typography */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl w-full space-y-8 sm:space-y-10">
          {/* Animated icon container */}
          <div className="flex justify-center animate-float">
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 shadow-2xl shadow-yellow-500/30">
              <Icon className="w-14 h-14 sm:w-18 sm:h-18 text-yellow-400 drop-shadow-lg" />
            </div>
          </div>

          {/* Enhanced title with better typography */}
          <div 
            key={`title-${currentSlide}`}
            className={`animate-fadeInUp ${isRTL ? 'font-arabic tracking-wide' : 'tracking-tighter'}`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight px-2 md:px-0">
              {currentContent.title[isRTL ? 'ar' : 'en']}
            </h2>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center animate-fadeIn delay-300">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full shadow-lg shadow-yellow-500/50"></div>
          </div>

          {/* Enhanced text with better readability */}
          <div 
            key={`text-${currentSlide}`}
            className="animate-fadeInUp delay-500"
          >
            <p className={`text-lg sm:text-xl md:text-2xl text-slate-100 max-w-4xl mx-auto leading-relaxed px-2 md:px-0 font-light ${
              isRTL ? 'font-arabic text-right pr-8 pl-8' : ''
            }`}>
              {currentContent.text[isRTL ? 'ar' : 'en']}
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}