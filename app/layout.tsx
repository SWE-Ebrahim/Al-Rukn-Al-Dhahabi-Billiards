import { headers, cookies } from 'next/headers';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Language, Theme } from '@/types/i18n';
import { LanguageProvider } from './context/LanguageContext';
import type { Metadata } from 'next';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alruknaldhahabi.com'),
  title: {
    default: 'Al Rukn Al Dhahabi | الركن الذهبي - Digital Solutions',
    template: '%s | Al Rukn Al Dhahabi',
  },
  description: 'Transform your digital presence with cutting-edge solutions. Al Rukn Al Dhahabi provides innovative digital services and technology solutions. حوّل حضورك الرقمي بحلول متطورة',
  keywords: [
    'digital solutions',
    'web development',
    'technology services',
    'Al Rukn Al Dhahabi',
    'الركن الذهبي',
    'حلول رقمية',
    'تطوير المواقع',
    'خدمات تقنية',
  ],
  authors: [{ name: 'Al Rukn Al Dhahabi' }],
  creator: 'Al Rukn Al Dhahabi',
  publisher: 'Al Rukn Al Dhahabi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_AE'],
    url: 'https://alruknaldhahabi.com',
    title: 'Al Rukn Al Dhahabi | الركن الذهبي - Digital Solutions',
    description: 'Transform your digital presence with cutting-edge solutions. Al Rukn Al Dhahabi provides innovative digital services and technology solutions.',
    siteName: 'Al Rukn Al Dhahabi | الركن الذهبي',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Al Rukn Al Dhahabi - Digital Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Rukn Al Dhahabi | الركن الذهبي - Digital Solutions',
    description: 'Transform your digital presence with cutting-edge solutions',
    images: ['/twitter-image.png'],
    creator: '@alruknaldhahabi',
    site: '@alruknaldhahabi',
  },
  alternates: {
    canonical: 'https://alruknaldhahabi.com',
  },
  category: 'technology',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const cookieStore = await cookies();
  
  // Get language from cookies or default to 'en'
  const savedLanguage = cookieStore.get('language')?.value as Language;
  const language = savedLanguage || (headersList.get('x-language') as Language) || 'en';
  
  // Get theme from cookies or default to 'light'
  const savedTheme = cookieStore.get('theme')?.value as Theme;
  const theme = savedTheme || 'light';
  
  const isRTL = language === 'ar';

  return (
    <html 
      lang={language} 
      dir={isRTL ? 'rtl' : 'ltr'} 
      className={`${cairo.variable} ${theme}`}
    >
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://alruknaldhahabi.com" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <LanguageProvider initialLanguage={language}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}