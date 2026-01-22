// app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 animate-pulse"></div>
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Brand Section */}
          <Link href="/" className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105" dir="ltr">
            {/* Enhanced 8-Ball Logo */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl group-hover:bg-yellow-500/50 transition-all duration-500 animate-pulse"></div>
              
              {/* Main logo */}
              <svg 
                width="56" 
                height="56" 
                viewBox="0 0 100 100" 
                className="relative drop-shadow-2xl transform group-hover:rotate-12 transition-transform duration-500"
              >
                {/* Shadow */}
                <circle cx="52" cy="52" r="48" fill="#000000" opacity="0.3" filter="blur(4px)"/>
                
                {/* Outer black circle with gradient */}
                <circle cx="50" cy="50" r="48" fill="url(#ballGradient)" stroke="#444444" strokeWidth="1.5"/>
                
                {/* White circle for number */}
                <circle cx="50" cy="50" r="20" fill="#FFFFFF" className="drop-shadow-lg"/>
                
                {/* Number 8 */}
                <text 
                  x="50" 
                  y="50" 
                  fontSize="28" 
                  fontWeight="900" 
                  fill="#000000" 
                  textAnchor="middle" 
                  dominantBaseline="central"
                  fontFamily="Arial, sans-serif"
                >
                  8
                </text>
                
                {/* Enhanced shine effect */}
                <ellipse cx="32" cy="32" rx="18" ry="24" fill="url(#footerShine)" opacity="0.5"/>
                
                <defs>
                  <radialGradient id="ballGradient">
                    <stop offset="0%" stopColor="#1a1a1a"/>
                    <stop offset="100%" stopColor="#000000"/>
                  </radialGradient>
                  <radialGradient id="footerShine">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
                {isRtl ? 'الركن الذهبي' : 'Al Rukn Al Dhahabi'}
              </span>
              <span className="text-yellow-500/70 text-sm font-medium tracking-wider">
                {isRtl ? 'بلياردو متميز' : 'Premium Billiards'}
              </span>
            </div>
          </Link>

          {/* Divider */}
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Copyright & Powered By Section */}
          <div className="flex flex-col items-center space-y-4" dir={isRtl ? 'rtl' : 'ltr'}>
            {/* Copyright */}
            <div className="text-center">
              <p className="text-slate-400 text-sm font-medium">
                &copy; {currentYear} {isRtl ? 'الركن الذهبي' : 'Al Rukn Al Dhahabi'}
              </p>
              <p className="text-slate-500 text-xs mt-1">
                {isRtl ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
              </p>
            </div>
            
            {/* Powered by badge */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
                <p className="text-slate-400 text-xs flex items-center gap-2">
                  <span>{isRtl ? 'مدعوم من' : 'Powered by'}</span>
                  <Link 
                    href="https://ebrahimalmahbosh.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 font-semibold underline decoration-yellow-500/30 underline-offset-2 transition-colors duration-300"
                    dir="ltr"
                  >
                    EtechStudio
                  </Link>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-500/5 to-transparent rounded-tr-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-yellow-500/5 to-transparent rounded-tl-full"></div>
    </footer>
  );
}