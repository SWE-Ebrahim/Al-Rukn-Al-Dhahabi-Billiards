import './globals.css';
import { Cairo } from 'next/font/google';
import type { Metadata } from 'next';
import { LanguageProvider } from './context/LanguageContext';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
});

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Al Rukn Al Dhahabi | الركن الذهبي',
  description:
    'Billiard & Gaming Zone in Ajman | صالة بلياردو وألعاب ترفيهية في عجمان',
  url: 'https://alruknaldhahabi.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ajman',
    addressCountry: 'AE',
  },
  areaServed: 'AE',
};

export const metadata: Metadata = {
  title: {
    default:
      'Al Rukn Al Dhahabi | Billiard & Gaming Zone in Ajman | الركن الذهبي',
    template: '%s | Al Rukn Al Dhahabi',
  },
  description:
    'Billiard hall and gaming zone in Ajman offering billiards, PlayStation, live match viewing, and refreshments | صالة بلياردو وألعاب ترفيهية في عجمان.',
  keywords: [
    // English
    'Billiard Ajman',
    'Billiard Hall Ajman',
    'Gaming Zone Ajman',
    'PlayStation Ajman',
    'Game Zone UAE',
    // Arabic
    'بلياردو عجمان',
    'صالة بلياردو',
    'ألعاب ترفيهية عجمان',
    'بلايستيشن عجمان',
  ],
  alternates: {
    canonical: 'https://alruknaldhahabi.com',
  },
  openGraph: {
    title:
      'Al Rukn Al Dhahabi | Billiard & Gaming Zone in Ajman | الركن الذهبي',
    description:
      'Billiard, PlayStation & live match viewing in Ajman | بلياردو وألعاب ترفيهية في عجمان.',
    url: 'https://alruknaldhahabi.com',
    siteName: 'Al Rukn Al Dhahabi',
    locale: 'en_AE',
    alternateLocale: ['ar_AE'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Al Rukn Al Dhahabi | Billiard & Gaming Zone Ajman',
    description:
      'Billiard & gaming zone in Ajman | صالة بلياردو وألعاب ترفيهية',
  },
  other: {
    'script:ld+json': JSON.stringify(localBusinessSchema),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={cairo.variable}>
      <body>
        <LanguageProvider initialLanguage="en">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
