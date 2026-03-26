import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();
  const headersList = await headers();
  
  // Get locale from cookie
  let locale = cookieStore.get('locale')?.value;
  
  // Fallback to Accept-Language header
  if (!locale) {
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage && acceptLanguage.includes('ar')) {
      locale = 'ar';
    } else {
      locale = 'en';
    }
  }
  
  // Redirect to locale-specific path
  redirect(`/${locale}`);
}