import { headers, cookies } from 'next/headers';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Language, Theme } from '@/types/i18n';
import { LanguageProvider } from './context/LanguageContext';
import type { Metadata } from 'next';

/* ============================
   FONT
   ============================ */
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-cairo',
});

/* ============================
   SEO METADATA (AR + EN)
   ============================ */
export const metadata: Metadata = {
  metadataBase: new URL('https://alruknaldhahabi.com'),

  title: {
    default:
      'الركن الذهبي للبلياردو | Al Rukn Al Dhahabi – Billiard & Gaming Zone Ajman',
    template: '%s | Al Rukn Al Dhahabi',
  },

  description:
    'الركن الذهبي صالة بلياردو وألعاب في عجمان، الإمارات. بلياردو، سنوكر، بلايستيشن ومنطقة ألعاب حديثة. Al Rukn Al Dhahabi is a premium billiard and gaming zone in Ajman, UAE.',

  keywords: [
    // English
    'Billiards UAE',
    'Ajman Billiards',
    'Billiards',
    'Snooker',
    'PlayStation gaming',
    'Gaming zone',
    'Game zone Ajman',
    'Billiard hall UAE',

    // Arabic
    'الركن الذهبي',
    'صالة بلياردو',
    'صالة بلياردو عجمان',
    'بلياردو عجمان',
    'سنوكر عجمان',
    'صالة ألعاب',
    'ألعاب بلايستيشن',
  ],

  authors: [{ name: 'Al Rukn Al Dhahabi' }],
  creator: 'Al Rukn Al Dhahabi',
  publisher: 'Al Rukn Al Dhahabi',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    locale: 'ar_AE',
    alternateLocale: ['en_AE'],
    url: 'https://alruknaldhahabi.com',
    title:
      'الركن الذهبي للبلياردو | Billiard & Gaming Zone in Ajman',
    description:
      'صالة بلياردو وسنوكر وألعاب بلايستيشن في عجمان، الإمارات. Premium billiard and gaming zone in Ajman, UAE.',
    siteName: 'Al Rukn Al Dhahabi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Al Rukn Al Dhahabi Billiard Hall Ajman',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'الركن الذهبي | Billiard Hall in Ajman',
    description:
      'Enjoy billiards, snooker and PlayStation gaming in Ajman, UAE.',
    images: ['/twitter-image.png'],
  },

  alternates: {
    canonical: 'https://alruknaldhahabi.com',
  },

  category: 'entertainment',
};

/* ============================
   LOCAL BUSINESS SCHEMA
   ============================ */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": "https://alruknaldhahabi.com/#localbusiness",

  name: "الركن الذهبي للبلياردو",
  alternateName: "Al Rukn Al Dhahabi Billiards",

  url: "https://alruknaldhahabi.com",

  description:
    "الركن الذهبي صالة بلياردو وألعاب في عجمان، الإمارات. بلياردو، سنوكر، بلايستيشن، تنس طاولة وكافتيريا خفيفة.",

  image: "https://alruknaldhahabi.com/og-image.png",

  telephone: "+971542002332",
  email: "alruknaldhahabi979@gmail.com",

  sameAs: [
    "https://www.instagram.com/alrukn.aldhahabi/",
    "https://www.tiktok.com/@alrukn.aldhahabi",
    "https://maps.app.goo.gl/pMWScpS4oHUYFNKYA"
  ],

  address: {
    "@type": "PostalAddress",
    streetAddress: "Grand Mall, Al Rashidiya 3",
    addressLocality: "Ajman",
    addressRegion: "Ajman",
    addressCountry: "AE"
  },

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Ajman"
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      opens: "10:00",
      closes: "03:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "13:45",
      closes: "03:00"
    }
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Billiards & Gaming Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Billiards (Pool)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Snooker" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PlayStation Gaming" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Table Tennis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cafeteria (Drinks & Snacks)" } }
    ]
  }
};

/* ============================
   ROOT LAYOUT
   ============================ */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const cookieStore = await cookies();

  const savedLanguage = cookieStore.get('language')?.value as Language;
  const language =
    savedLanguage ||
    (headersList.get('x-language') as Language) ||
    'ar';

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="canonical" href="https://alruknaldhahabi.com" />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <LanguageProvider initialLanguage={language}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
