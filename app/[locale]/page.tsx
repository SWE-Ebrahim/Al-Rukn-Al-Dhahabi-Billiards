import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Metadata } from 'next';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  return {
    alternates: {
      canonical: isAr ? 'https://alruknaldhahabi.com/ar' : 'https://alruknaldhahabi.com/en',
      languages: {
        en: 'https://alruknaldhahabi.com/en',
        ar: 'https://alruknaldhahabi.com/ar',
      },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  await params;

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}