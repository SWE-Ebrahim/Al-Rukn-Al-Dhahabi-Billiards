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
        'بلياردو عجمان',
        'سنوكر عجمان',
        'بلايستيشن عجمان',
        'الركن الذهبي',
        'تنس طاولة عجمان',
        'بينج بونج عجمان',
        'ألعاب ترفيهية عجمان',
        'جراند مول عجمان',
        'صالة بلياردو عجمان',
        'ترفيه عجمان',
        'أفضل بلياردو في الإمارات',
        'عجمان مراكز ترفيه',
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
        canonical: 'https://alruknaldhahabi.com/ar',
        languages: {
          en: 'https://alruknaldhahabi.com/en',
          ar: 'https://alruknaldhahabi.com/ar',
          'x-default': 'https://alruknaldhahabi.com/en',
        },
      },
      openGraph: {
        type: 'website',
        url: 'https://alruknaldhahabi.com/ar',
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
    metadataBase: new URL('https://alruknaldhahabi.com'),
    title: {
      default: 'Al Rukn Al Dhahabi | Billiard, Snooker & Gaming in Ajman',
      template: '%s | Al Rukn Al Dhahabi',
    },
    description:
      'Premium billiard hall, snooker tables, PlayStation, table tennis and ping pong in Grand Mall Ajman, UAE. Walk in or WhatsApp to book.',
    keywords: [
      'billiard Ajman',
      'billiards in Ajman',
      'snooker Ajman',
      'PlayStation Ajman',
      'table tennis Ajman',
      'ping pong Ajman',
      'gaming zone Ajman',
      'Grand Mall Ajman',
      'Al Rukn Al Dhahabi',
      'billiard hall UAE',
      'entertainment Ajman',
      'best billiard UAE',
      'Ajman entertainment centers',
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
      canonical: 'https://alruknaldhahabi.com/en',
      languages: {
        en: 'https://alruknaldhahabi.com/en',
        ar: 'https://alruknaldhahabi.com/ar',
        'x-default': 'https://alruknaldhahabi.com/en',
      },
    },
    openGraph: {
      type: 'website',
      url: 'https://alruknaldhahabi.com/en',
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
    '@id': 'https://alruknaldhahabi.com/#business',
    name: isAr ? 'الركن الذهبي للبلياردو' : 'Al Rukn Al Dhahabi Billiards',
    alternateName: isAr ? 'Al Rukn Al Dhahabi' : 'الركن الذهبي',
    url: `https://alruknaldhahabi.com/${locale}`,
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
        <link rel="alternate" hrefLang="en" href="https://alruknaldhahabi.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://alruknaldhahabi.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://alruknaldhahabi.com/en" />
        
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