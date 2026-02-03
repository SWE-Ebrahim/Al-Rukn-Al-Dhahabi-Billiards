import './globals.css';
import { Cairo } from 'next/font/google';
import type { Metadata } from 'next';
import { LanguageProvider } from './context/LanguageContext';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
});

/* =========================
   LOCAL BUSINESS SCHEMA
   ========================= */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  '@id': 'https://alruknaldhahabi.com/#localbusiness',

  name: 'Al Rukn Al Dhahabi Billiards - الركن الذهبي للبلياردو',
  alternateName: 'Al Rukn Al Dhahabi Billiard Hall',

  url: 'https://alruknaldhahabi.com',

  description:
    'Al Rukn Al Dhahabi is a premium billiard and gaming zone in Ajman. الركن الذهبي صالة بلياردو وألعاب ترفيهية في عجمان.',

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ajman',
    addressRegion: 'Ajman',
    addressCountry: 'AE',
  },
  "geo":  {
    "@type": "GeoCoordinates",
    "latitude": 25.392707887316476,
    "longitude": 55.43918952665708
  }, 

  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Ajman',
  },

  sameAs: [
    'https://www.instagram.com/alrukn.aldhahabi/',
    'https://www.tiktok.com/@alrukn.aldhahabi',
  ],
};

/* =========================
   SEO METADATA (AR + EN)
   ========================= */
export const metadata: Metadata = {
  metadataBase: new URL('https://alruknaldhahabi.com'),

  title: {
    default:
      'Al Rukn Al Dhahabi | Billiard & Gaming Zone in Ajman |  الركن الذهبي للبلياردو',
    template: '%s | Al Rukn Al Dhahabi Billiards',
  },

  description:
    'Billiard hall and gaming zone in Ajman, UAE offering billiards, snooker, PlayStation, and live match viewing. صالة بلياردو وألعاب ترفيهية في عجمان.',

  keywords: [
    // English
    'Billiard Ajman',
    'Billiards in Ajman',
    'Billiard Hall Ajman',
    'Gaming Zone Ajman',
    'Billiard Hall UAE',
    'Gaming Zone UAE',
    'Billiard UAE',
    'Snooker Ajman',
    'Snooker UAE',
    'PlayStation in Ajman',
    'PlayStation UAE',
    'PlayStation Ajman',
    'Game Zone UAE',

    // Arabic
    'بلياردو',
    'بلياردو في عجمان',
    'صالة بلياردو',
    'صالة بلياردو عجمان',
    'ألعاب ترفيهية عجمان',
    'بلايستيشن عجمان',
    'ألعاب ترفيهية UAE',
    'بوابة الألعاب',
    'ألعاب ترفيهية UAE في عجمان',
  ],

  alternates: {
    canonical: 'https://alruknaldhahabi.com',
  },

  openGraph: {
    type: 'website',
    url: 'https://alruknaldhahabi.com',
    siteName: 'Al Rukn Al Dhahabi Billiards',
    title:
      'Al Rukn Al Dhahabi | Billiard & Gaming Zone in Ajman | الركن الذهبي للبلياردو',
    description:
      'Billiard, snooker & gaming zone in Ajman, UAE | صالة بلياردو وألعاب ترفيهية في عجمان.',
    locale: 'en_AE',
    alternateLocale: ['ar_AE'],
    images: [
      {
        url: "https://res.cloudinary.com/dtwjhjtjw/image/upload/v1769009201/image2.jpg",
        width: 1200,
        height: 630,
        alt: 'Al Rukn Al Dhahabi | Billiard & Gaming Zone in Ajman | الركن الذهبي للبلياردو',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Al Rukn Al Dhahabi | Billiard Hall in Ajman',
    description:
      'Enjoy billiards, snooker and gaming in Ajman | صالة بلياردو وألعاب ترفيهية',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },

  category: 'entertainment',
};

/* =========================
   ROOT LAYOUT
   ========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={cairo.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="canonical" href="https://alruknaldhahabi.com" />

        {/* Repeated business details in meta tags */}
        <meta name="author" content="Al Rukn Al Dhahabi Billiards - الركن الذهبي للبلياردو" />
        <meta name="publisher" content="Al Rukn Al Dhahabi" />
        <meta name="coverage" content="Grand Mall, Al Rashidiya 3, Ajman, UAE" />
        <meta name="geo.region" content="AE-AJ" />
        <meta name="geo.placename" content="Ajman, UAE" />
        <meta name="geo.position" content="25.392707887316476;55.43918952665708" />
        <meta name="ICBM" content="25.392707887316476, 55.43918952665708" />
        
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body>
        <LanguageProvider initialLanguage="en">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
