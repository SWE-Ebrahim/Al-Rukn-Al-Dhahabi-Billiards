import { headers, cookies } from 'next/headers';
import { Language } from '@/types/i18n';
import Hero from './components/Hero';
import Contact from './components/Contact';
import SubSection from './components/SubSection';
import Footer from './components/Footer';

export default async function Home() {
  const headersList = await headers();
  const cookieStore = await cookies();
  
  const language = (cookieStore.get('language')?.value || headersList.get('x-language') || 'en') as Language;

  return (
    <>
      <Hero />
      <SubSection />
      <Contact />
      <Footer/>
    </>
  );
}