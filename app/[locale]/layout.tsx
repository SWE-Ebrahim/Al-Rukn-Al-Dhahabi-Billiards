import { Cairo } from 'next/font/google';
import type { Metadata } from 'next';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '../context/ThemeContext';
import FloatingNav from '../components/FloatingNav';
import '../globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

/* =========================
   GENERATE METADATA PER LOCALE
   ========================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  if (isAr) {
    return {
      metadataBase: new URL('https://alruknaldhahabi.com'),
      title: {
        default: 'الركن الذهبي | بلياردو وسنوكر وبلايستيشن في عجمان',
        template: '%s | الركن الذهبي',
      },
      description:
        'صالة بلياردو وسنوكر وبلايستيشن وتنس طاولة وبينج بونج في جراند مول عجمان. تفضل مباشرة أو تواصل معنا على واتساب.',
      keywords: [
        // Primary Arabic Keywords
        'بليارد',
        'بلياردو',
        'سنوكر',
        'بلايستيشن',
        'الركن الذهبي',
        
        // Location-based Arabic
        'بليارد عجمان',
        'بلياردو عجمان',
        'سنوكر عجمان',
        'بلايستيشن عجمان',
        'صالة بليارد عجمان',
        'صالة بلياردو عجمان',
        'مركز سنوكر عجمان',
        'نادي بليارد عجمان',
        'جراند مول عجمان',
        
        // Gaming & Entertainment Arabic
        'ألعاب ترفيهية عجمان',
        'ترفيه عجمان',
        'منطقة ألعاب عجمان',
        'مركز ترفيه عجمان',
        'عجمان مراكز ترفيه',
        
        // Related Activities Arabic
        'تنس طاولة عجمان',
        'بينج بونج عجمان',
        '8-ball عجمان',
        '9-ball عجمان',
        
        // Cross-language (Arabic + English)
        'billiard عجمان',
        'snooker عجمان',
        'playstation عجمان',
        'gaming عجمان',
        
        // Quality & Ranking Arabic
        'أفضل بليارد في الإمارات',
        'أفضل سنوكر في عجمان',
        'أفضل بلياردو UAE',
        'افضل صالة بليارد',
      ],
      authors: [{ name: 'Al Rukn Al Dhahabi' }],
      creator: 'Al Rukn Al Dhahabi',
      publisher: 'Al Rukn Al Dhahabi',
      formatDetection: {
        email: false,
        address: true,
        telephone: true,
      },
      alternates: {
        canonical: 'https://www.alruknaldhahabi.com/ar',
        languages: {
          en: 'https://www.alruknaldhahabi.com/en',
          ar: 'https://www.alruknaldhahabi.com/ar',
          'x-default': 'https://www.alruknaldhahabi.com/en',
        },
      },
      openGraph: {
        type: 'website',
        url: 'https://www.alruknaldhahabi.com/ar',
        siteName: 'الركن الذهبي',
        title: 'الركن الذهبي | بلياردو وسنوكر وبلايستيشن في عجمان',
        description:
          'صالة بلياردو وسنوكر وبلايستيشن في جراند مول عجمان، الإمارات.',
        locale: 'ar_AE',
        alternateLocale: ['en_AE'],
        images: [
          {
            url: 'https://res.cloudinary.com/dtwjhjtjw/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/image2',
            width: 1200,
            height: 630,
            alt: 'الركن الذهبي - صالة بلياردو في عجمان',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'الركن الذهبي | بلياردو عجمان',
        description: 'صالة بلياردو وألعاب ترفيهية في عجمان، الإمارات',
        creator: '@alrukn.aldhahabi',
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
    };
  }

  // English metadata
  return {
    metadataBase: new URL('https://www.alruknaldhahabi.com'),
    title: {
      default: 'Al Rukn Al Dhahabi | Billiard, Snooker & Gaming in Ajman',
      template: '%s | Al Rukn Al Dhahabi',
    },
    description:
      'Premium billiard hall, snooker tables, PlayStation, table tennis and ping pong in Grand Mall Ajman, UAE. Walk in or WhatsApp to book.',
    keywords: [
      // Primary English Keywords
      'Billiards',
      'Billiard',
      'Snooker',
      '8-Pool',
      'Playstation',
      'Gaming',
      'Gaming Zone',
      
      // Location-based English
      'Billiard Ajman',
      'Billiards Ajman',
      'Snooker Ajman',
      'Playstation Ajman',
      'Gaming Ajman',
      'Gaming Zone Ajman',
      '8-Pool Ajman',
      'Pool Hall Ajman',
      'Billiard Hall Ajman',
      'Snooker Hall Ajman',
      
      // Variations & Synonyms
      'billiard table Ajman',
      'billiard tables Ajman',
      'snooker table Ajman',
      'snooker tables Ajman',
      'pool table Ajman',
      'pool tables Ajman',
      '8 ball Ajman',
      '8-ball Ajman',
      '9 ball Ajman',
      '9-ball Ajman',
      
      // Gaming Specific
      'PS5 Ajman',
      'PS4 Ajman',
      'Playstation 5 Ajman',
      'Playstation 4 Ajman',
      'video games Ajman',
      'console gaming Ajman',
      'gaming lounge Ajman',
      'gaming center Ajman',
      'gaming club Ajman',
      
      // Location & Venue
      'Grand Mall Ajman',
      'Al Rukn Al Dhahabi',
      'billiard club Ajman',
      'snooker club Ajman',
      'pool club Ajman',
      'sports lounge Ajman',
      'recreation center Ajman',
      'entertainment center Ajman',
      
      // Activity-based
      'play billiards Ajman',
      'play snooker Ajman',
      'play pool Ajman',
      'play 8-ball Ajman',
      'billiard games Ajman',
      'snooker games Ajman',
      
      // Quality & Ranking
      'best billiard Ajman',
      'best billiards Ajman',
      'best snooker Ajman',
      'top billiard Ajman',
      'premier billiard Ajman',
      'premium snooker Ajman',
      'professional billiard Ajman',
      
      // Related Activities
      'table tennis Ajman',
      'ping pong Ajman',
      'indoor sports Ajman',
      'indoor games Ajman',
      
      // Intent-based Searches
      'where to play billiards in Ajman',
      'where to play snooker in Ajman',
      'billiard near me Ajman',
      'snooker near me Ajman',
      'gaming zone near me Ajman',
      'billiard hall near me',
      'snooker hall near me',
      
      // Time-based
      'billiard open now Ajman',
      'snooker open late Ajman',
      'evening entertainment Ajman',
      'nightlife Ajman',
      'weekend activities Ajman',
      'things to do in Ajman',
      
      // Audience-based
      'family entertainment Ajman',
      'family fun Ajman',
      'casual gaming Ajman',
      'competitive gaming Ajman',
      'social gaming Ajman',
      'friends hangout Ajman',
      
      // UAE-wide
      'billiard UAE',
      'billiards UAE',
      'snooker UAE',
      'gaming UAE',
      'billiard Emirates',
      'snooker Emirates',
      'Ajman entertainment',
      'Ajman leisure',
    ],
    authors: [{ name: 'Al Rukn Al Dhahabi' }],
    creator: 'Al Rukn Al Dhahabi',
    publisher: 'Al Rukn Al Dhahabi',
    formatDetection: {
      email: false,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: 'https://www.alruknaldhahabi.com/en',
      languages: {
        en: 'https://www.alruknaldhahabi.com/en',
        ar: 'https://www.alruknaldhahabi.com/ar',
        'x-default': 'https://www.alruknaldhahabi.com/en',
      },
    },
    openGraph: {
      type: 'website',
      url: 'https://www.alruknaldhahabi.com/en',
      siteName: 'Al Rukn Al Dhahabi Billiards',
      title: 'Al Rukn Al Dhahabi | Billiard, Snooker & Gaming in Ajman',
      description: 'Premium billiard hall and gaming zone in Grand Mall Ajman, UAE.',
      locale: 'en_AE',
      alternateLocale: ['ar_AE'],
      images: [
        {
          url: 'https://res.cloudinary.com/dtwjhjtjw/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/image2',
          width: 1200,
          height: 630,
          alt: 'Al Rukn Al Dhahabi - Billiard Hall in Ajman',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Al Rukn Al Dhahabi | Billiards Ajman',
      description: 'Billiard, snooker and gaming in Ajman, UAE',
      creator: '@alrukn.aldhahabi',
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
  };
}

/* =========================
   BUILD JSON-LD STRUCTURED DATA
   ========================= */
function buildSchema(locale: 'en' | 'ar') {
  const isAr = locale === 'ar';
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': 'https://www.alruknaldhahabi.com/#business',
    name: isAr ? 'الركن الذهبي للبلياردو' : 'Al Rukn Al Dhahabi Billiards',
    alternateName: isAr ? 'Al Rukn Al Dhahabi' : 'الركن الذهبي',
    url: `https://www.alruknaldhahabi.com/${locale}`,
    telephone: '+971542002332',
    description: isAr
      ? 'صالة بلياردو وسنوكر وبلايستيشن في جراند مول عجمان.'
      : 'Premium billiard hall, snooker and gaming zone in Grand Mall Ajman.',
    inLanguage: locale,
    address: {
      '@type': 'PostalAddress',
      streetAddress: isAr ? 'جراند مول، الراشدية 3' : 'Grand Mall, Al Rashidiya 3',
      addressLocality: isAr ? 'عجمان' : 'Ajman',
      addressRegion: 'Ajman',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.392703,
      longitude: 55.439188,
    },
    sameAs: [
      'https://www.instagram.com/alrukn.aldhahabi/',
      'https://www.tiktok.com/@alrukn.aldhahabi',
    ],
    hasMap: 'https://maps.app.goo.gl/jWcPmvJwTzk3QoW5A',
  };
}

/* =========================
   ROOT LAYOUT COMPONENT
   ========================= */
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const schema = buildSchema(locale as 'en' | 'ar');

  return (
    <html lang={locale} dir={isAr ? 'rtl' : 'ltr'} className={cairo.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        
        {/* Hreflang tags - CRITICAL for SEO */}
        <link rel="alternate" hrefLang="en" href="https://www.alruknaldhahabi.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://www.alruknaldhahabi.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://www.alruknaldhahabi.com/en" />
        
        {/* Geo meta tags */}
        <meta name="geo.region" content="AE-AJ" />
        <meta name="geo.placename" content="Ajman, UAE" />
        <meta name="geo.position" content="25.392703;55.439188" />
        <meta name="ICBM" content="25.392703, 55.439188" />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>

      <body suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider initialLanguage={locale as 'en' | 'ar'}>
            <FloatingNav />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}